import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <I18nProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </I18nProvider>
    </HelmetProvider>,
  );
  return { html, helmet: helmetContext.helmet };
}
