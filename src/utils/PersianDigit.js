export const toPersianDigits = (input) => {
    if (input === null || input === undefined) {
        return ""; // Return an empty string or any default value you'd prefer
    }

    const persianMap = {
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
    };

    return input.toString().replace(/\d/g, (digit) => persianMap[digit]);
};
