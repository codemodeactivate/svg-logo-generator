
  # SVG Generator
  [![BSD 2-clause "Simplified" license](https://img.shields.io/badge/License-BSD%202-clause%20%22Simplified%22%20license)](https://choosealicense.com/licenses/bsd-2-clause/)
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribute](#Contribute)
  * [Test Instructions](#Test-Instructions)
  * [License](#License)
  * [Questions](#Questions)
  * [Future Development](#Future-Development)
  * [Credits](#Credits)

  ## Description
  This was the challenge for the coding bootcamp Module 10. It's a command line interface program written in node and using jest for testing. This challenged me to modulate my code to a degree that I hadn't before. I think I may have over-modularized in some parts or at least I tried to and then consolidated when things were too buggy and confusing. I think going forward, I will hopefully be more mindful of this and let the code happen organically and then make things more modular over time rather than starting with that goal in mind.

  ## Demo/Walkthrough
 
  [![Demo Video](/assets/demo.png)](https://drive.google.com/file/d/17XmJZ145pm7-qHVYA5ka7mWIPJnHQu6v/view)

  ## Installation
  Make sure to have Node installed, as well as Jest if you'd like to test stuff out using the test files provided
  ## Usage
  By running npm install, you can then run node index.js and follow the prompts to generate an SVG. You can also run npx jest to run the tests.
  ## Contribute
  Fork it, baby!
  ## Test Instructions
  In your terminal, you can run npx jest. Your package.json file should have:
  ```
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "inquirer": "^8.2.4",
    "jest": "^29.5.0"
  }


```
  ## License
  https://choosealicense.com/licenses/bsd-2-clause/

  [![BSD 2-clause "Simplified" license](https://img.shields.io/badge/License-BSD%202-clause%20%22Simplified%22%20license)](https://choosealicense.com/licenses/bsd-2-clause/)

  ## Questions
  If you have any questions, please contact me at jeff.zenko@gmail.com. You can also find me on GitHub at [codemodeactivate](https://github.com/codemodeactivate).
  ## Future Development
  I could definitely go back and clean up some of the confusing bits. As mentioned in the description, things got a little bit of spaghetti-y, but I did learn a lot from this, which I think was the ultimate goal. I would love to add more options for text weight, font families, attributes of the shape, etc just to make it more customizable and usable. Also, one day adding a web component to this because let's be honest who's going to go through all these steps to make an SVG with this when there are much better, easier alternatives out there?
  ## Credits
  I made use of the tutoring services which helped me trace a bug for about 3 hours. Several repos helped inspire me or sparked that a-ha moment:
  - https://github.com/victoriamcn/SVG-Logo-Maker
  - https://github.com/johnxlai/svg-logo-maker
  - https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker
  - https://github.com/dereksutton/logo-generator.

  My friends over at chatgpt helped me with making CSS color arrays, fixing jest tests, and a whole bunch of little things like reminding how to destructure and reminding me to keep the correct order when using super().
