# Dayjs-Jalali-Plugin
[![npm (scoped with tag)](https://img.shields.io/npm/v/@zoomit/dayjs-jalali-plugin/latest.svg?style=flat-square)](https://www.npmjs.com/package/@zoomit/dayjs-jalali-plugin)
[![npm](https://img.shields.io/npm/dt/@zoomit/dayjs-jalali-plugin.svg?style=flat-square)](https://www.npmjs.com/package/@zoomit/dayjs-jalali-plugin)


Persian (Jalali, Khorshidi) Plugin for [Day.js](https://github.com/iamkun/dayjs), This package add multi-calendar functionality to Day.js core regardless for of locale, so we can have Gregorian calendar is Persian locale of Jalali calendar in English locale
Unlike moment and becuase of immutablity of dayjs, there is no need for formats like `jYYYY` or `jMM`, in Jalaliday all formats are same and standard

>

## Installation
NPM
```
npm install --save @zoomit/dayjs-jalali-plugin
```
YARN
```
yarn add @zoomit/dayjs-jalali-plugin
```

## Usage
```javascript
import dayjs from 'dayjs'
import jalaliPlugin from '@zoomit/dayjs-jalali-plugin'

dayjs.extend(jalaliPlugin)
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
