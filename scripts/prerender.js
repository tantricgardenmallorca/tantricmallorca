import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const ROUTES = [
  '/',
  '/masajistas/melany',
  '/masajistas/ivonny',
  '/masajistas/dulce-maria',
  '/masajistas/camila',
];

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const ssrEntry = path.join(ssrDir, 'entry-server.js');
if (!fs.existsSync(ssrEntry)) {
  throw new Error(
    `SSR bundle not found at ${ssrEntry}. Run "vite build --ssr ..." first.`,
  );
}

const { render } = await import(pathToFileURL(ssrEntry).href);

// Patterns of head-meta tags that may appear inside the React tree and must be hoisted to <head>.
const HEAD_TAG_PATTERN = new RegExp(
  [
    '<title[^>]*>[\\s\\S]*?<\\/title>',
    '<meta\\s[^>]*\\/?>',
    '<link\\s[^>]*\\/?>',
    '<script[^>]*type="application\\/ld\\+json"[^>]*>[\\s\\S]*?<\\/script>',
  ].join('|'),
  'g',
);

function extractHeadTagsFromBody(html) {
  const rootMatch = html.match(
    /(<div id="root">)([\s\S]*?)(<\/div>\s*<\/body>)/,
  );
  if (!rootMatch) {
    return { html, headTags: '' };
  }
  const before = rootMatch[1];
  const rootContent = rootMatch[2];
  const after = rootMatch[3];

  const headTagsArr = [];
  // Only extract tags from the very beginning of the React tree (helmet hoists them there)
  // Walk the root content, taking head tags until we hit a non-head element.
  let cleanedRoot = rootContent;
  const leading = cleanedRoot.match(
    /^(?:<title[^>]*>[\s\S]*?<\/title>|<meta\s[^>]*\/?>|<link\s[^>]*\/?>|\s*)+/,
  );
  if (leading) {
    const block = leading[0];
    const matched = block.match(HEAD_TAG_PATTERN) || [];
    headTagsArr.push(...matched);
    cleanedRoot = cleanedRoot.slice(block.length);
  }

  return {
    html: html.replace(rootMatch[0], `${before}${cleanedRoot}${after}`),
    headTags: headTagsArr.join('\n    '),
  };
}

for (const url of ROUTES) {
  const { html } = render(url);

  let final = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );

  // Extract head tags hoisted by react-helmet-async / React 19 metadata into the React tree.
  const extracted = extractHeadTagsFromBody(final);
  final = extracted.html;

  if (extracted.headTags) {
    // Remove the default title from the template — we'll inject the per-route one.
    const newTitleMatch = extracted.headTags.match(
      /<title[^>]*>[\s\S]*?<\/title>/,
    );
    if (newTitleMatch) {
      final = final.replace(/<title[^>]*>[\s\S]*?<\/title>/, newTitleMatch[0]);
      // Now strip the title from headTags so we don't add it twice.
      const headTagsNoTitle = extracted.headTags.replace(
        /<title[^>]*>[\s\S]*?<\/title>/,
        '',
      );
      final = final.replace('</head>', `    ${headTagsNoTitle}\n  </head>`);
    } else {
      final = final.replace(
        '</head>',
        `    ${extracted.headTags}\n  </head>`,
      );
    }
  }

  // Move the JSON-LD script (if rendered into the body) to the head.
  const ldMatches = [
    ...final.matchAll(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
    ),
  ];
  if (ldMatches.length > 0) {
    // Take the last one (most likely the one rendered inside the React tree)
    const ld = ldMatches[ldMatches.length - 1][0];
    // Only move if it's NOT already in the head
    const headEnd = final.indexOf('</head>');
    const ldPos = final.lastIndexOf(ld);
    if (ldPos > headEnd) {
      final = final.replace(ld, '');
      final = final.replace('</head>', `    ${ld}\n  </head>`);
    }
  }

  const outPath =
    url === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, url, 'index.html');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, final);
  console.log(`✓ Prerendered ${url} → ${path.relative(root, outPath)}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`\n✓ Prerender complete (${ROUTES.length} routes)`);
