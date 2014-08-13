function dacal (date, month, year) {
    var days = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        months = [
            'January': 7,
            'February': 3,
            'March': 3,
            'April': 6,
            'May': 1,
            'June': 4,
            'July': 6,
            'August': 2,
            'September': 5,
            'October': 7,
            'November': 3,
            'December': 5
        ]
        leftOver,
        total,
        dayCount
    ;

    leftOver = (year - (year % 4)) / 4;
    total = year + months.month + date + leftOver

    if (year % 4 == 0) {
        total--;
    }

    dayCount = total % 7;

    return days[dayCount];
}

module.exports = dacal;