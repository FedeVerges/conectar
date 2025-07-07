export function toTitleCase(text?: string | null): string {
  if (!text) return '';
  return text
    .replace(/[-_]/g, ' ')
    .toLowerCase()
    .split(/(\s|,)/)
    .map((word) =>
      /^[a-záéíóúñü]/i.test(word)
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word
    )
    .join('');
}
