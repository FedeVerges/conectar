import { Dayjs } from 'dayjs';

export function formatDate(value?: string | Date | Dayjs | null): string {
  if (!value) return '-';

  let date: Date;

  if (typeof value === 'string' || value instanceof Date) {
    date = new Date(value);
  } else if ('isValid' in value && typeof value.isValid === 'function') {
    if (!value.isValid()) return '-';
    date = value.toDate();
  } else {
    return '-';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
