import dayjs from 'dayjs';
import jalali from '../src';
import { fa } from '../src/constant';
import localeData from 'dayjs/plugin/localeData';

const weekdays = 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_');

dayjs.extend(localeData);

dayjs.extend(jalali);

it('Should jalali month for localeData plugin', () => {
  const months = dayjs().calendar('jalali').locale('fa').localeData().months();
  const week = dayjs().calendar('jalali').locale('fa').localeData().weekdays();

  expect(months).toBe(fa.jmonths);
  expect(week).toEqual(weekdays);
});
