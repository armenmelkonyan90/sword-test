import { zonedTimeToUtc } from 'date-fns-tz';
import differenceInDays from 'date-fns/differenceInDays';

export function getDifferenceBooleanByDate(
  currDate: string,
  date: string,
  days: number,
): boolean {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateWithoutTZ = zonedTimeToUtc(date, timezone);
  const difference = differenceInDays(dateWithoutTZ, new Date(currDate));
  const bool: boolean = difference < days;

  return bool;
}
