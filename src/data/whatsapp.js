export const WHATSAPP_NUMBER = '+34604199353';

const DIGITS = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');

export function whatsappLink(message) {
  const base = `https://wa.me/${DIGITS}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
