export function formatPhoneNumber(text?: string): string {
  if (text?.length === 10) {
    const match = text.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
  }
  return text ? text : '';
}
