import dayjs from 'dayjs';
import jalaliPlugin from '@zoomit/dayjs-jalali-plugin';

dayjs.extend(jalaliPlugin);

dayjs.calendar('jalali');

const d = dayjs(new Date(), { jalali: false });
console.log(d);
console.log(d.locale('en').format('YYYY'));
