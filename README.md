# Dayjs-Jalali-Plugin
[![npm (scoped with tag)](https://img.shields.io/npm/v/jalaliday/latest.svg?style=flat-square)](https://npmjs.com/package/jalaliday)
[![npm](https://img.shields.io/npm/dt/jalaliday.svg?style=flat-square)](https://npmjs.com/package/jalaliday)
[![Codecov](https://img.shields.io/codecov/c/github/alibaba-aero/jalaliday.svg?style=flat-square)](https://codecov.io/gh/)

Persian (Jalali, Khorshidi) Plugin for [Day.js](https://github.com/iamkun/dayjs), This package add multi-calendar functionality to Day.js core regardless for of locale, so we can have Gregorian calendar is Persian locale of Jalali calendar in English locale
Unlike moment and becuase of immutablity of dayjs, there is no need for formats like `jYYYY` or `jMM`, in Jalaliday all formats are same and standard

>

[📖 **Release Notes**](./CHANGELOG.md)

## Installation
NPM
```
npm install --save jalaliday
```
YARN
```
yarn add jalaliday
```

## Usage
```javascript
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

dayjs.extend(jalaliday)
```

### Changing calendar
If you want to all new instanses of dayjs use `jalali` calendar, you can set default calendar
```javascript
dayjs.calendar('jalali') // Jalali Calendar
// OR
dayjs.calendar('gregory') // Gregorian Calendar
```
also you can create a jalali date without changing default calendar
```javascript
const date = dayjs()
const jalaliDate = date.calendar('jalali')
```

### Parse Date
- Parse Gregory date
```js
const date = dayjs('2018-04-04T16:00:00.000Z');
```
- Parse Jalali date
```js
const date = dayjs('1398-10-17', { jalali: true });
```

### Multiple Locale
with combination of `calendar` and `locale` we have multi language for real
```javascript
dayjs().calendar('jalali').locale('en').format('DD MMMM YYYY') // '13 Shahrivar 1397'
dayjs().calendar('gregory').locale('fa').format('DD MMMM YYYY') // '04 سپتامبر 2018'
```
