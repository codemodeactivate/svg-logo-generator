const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./questions.js')
const shapes = require('./shapes.js')

class CLI {
    constructor() {
        inquirer
            .prompt(questions)
            .then((answers) => {


            });

    }
}
















module.exports = CLI;
