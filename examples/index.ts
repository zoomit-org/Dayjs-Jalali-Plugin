import dayjs from 'dayjs';
import jalaliPlugin from '@zoomit/dayjs-jalali-plugin';

dayjs.extend(jalaliPlugin);

dayjs.calendar('jalali');

console.log(dayjs(new Date(), {}));

dayjs();
