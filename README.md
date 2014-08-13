dacal
=============

Calculate day from any date


Examples
--------

```js
var dacal = require('dacal'),
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

```