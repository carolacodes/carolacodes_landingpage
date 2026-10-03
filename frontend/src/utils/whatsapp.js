export function createWhatsAppUrl(phone, message) {
  const encodedMessage = encodeURIComponent(message);

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }

  return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}