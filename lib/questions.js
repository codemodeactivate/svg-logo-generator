

const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: 'logoTextColor',  // text color
        message: 'Text Color? Enter a color keyword (OR a hexadecimal number)',
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'Choose a shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'logoShapeColor',
        message: 'Shape Color? Enter a color keyword (OR a hexadecimal number)',
    },
];

module.exports = questions;
