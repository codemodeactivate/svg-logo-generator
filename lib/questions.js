const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: 'textColor',  // text color
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
        name: 'shapeColor',
        message: 'Shape Color? Enter a color keyword (OR a hexadecimal number)',
    },
];

module.exports = questions;
