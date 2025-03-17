import dayjs from 'dayjs';
import jalali from '../src';

dayjs.extend(jalali);

it('should return currect iso string', () => {
  const faDates = ['1398-08-09', '1400-01-6', '1404-02-28', '1403-12-30'];
  const enDates = ['2019-10-31', '2021-03-26', '2025-05-18', '2025-03-20'];
  faDates.forEach((date, index) => {
    expect(dayjs(date, { jalali: true }).toISOString()).toEqual(dayjs(enDates[index]).toISOString());
  });
});
