var dacal = require('..'),
    date,
    month,
    year,
    day
;

date = 4;
month = 'October';
year = 1993;

day = dacal(date, month, year);
console.log(day); // "Friday"