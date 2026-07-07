export function buildWhatsAppLink(phoneNumber: string, message: string) {
  const normalizedPhone = phoneNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function getVideoEmbedUrl(url: string) {
  const parsed = new URL(url);

  if (parsed.hostname.includes("youtube.com")) {
    const id = parsed.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }

  if (parsed.hostname.includes("youtu.be")) {
    const id = parsed.pathname.replace("/", "");
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }

  if (parsed.hostname.includes("vimeo.com")) {
    const id = parsed.pathname.split("/").filter(Boolean).at(0);
    return id ? `https://player.vimeo.com/video/${id}` : url;
  }

  return url;
}
