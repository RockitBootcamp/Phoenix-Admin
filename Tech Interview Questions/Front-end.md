# Front-end Mock Technical Questions

## Guidelines

- Interviews should last 60 or less
- Ask questions from all areas
    - Use discretion to skip or change questions based on student skill level
- Use Pirate Pad to capture Coding Questions
    - Start a new session for each student
    - Keep track of the code used for the student
- Take notes on questions that don't require coding
- After the interview, take 2 minutes to evaluate the student from 1-5 based on a entry-level web developer position
    - 1 is a low score for entry web developer
    - 5 is a high score for entry web developer

## Main Sections

- JavaScript / JQuery / DOM
- CSS
- DataBases
- General Computer Science
- Do you think this student is ready for an EntryLevel/SoftwareI position? General Notes


> Note that the question in each section are ordered from easiest to most difficult to help you gauge student skill



# JavaScript / jQuery

### It terms of the DOM, what is the difference between a class and an ID
- IDs should only be used once per page
- Classes can be used multiple times per page
- When writing CSS selectors, it's generally encouraged to use class names over IDs for lower CSS specificity. Lower specificity is desired


### What is JSON and why is it significant?
- JSON stands for JavaScript Object Notation
- It's significant because it can transmit data over HTTP with a smaller filesize than most other mediums (like XML)
- It is commonly used for AJAX when front-end JavaScript wishes to request data from the server


### What is AJAX and why is it significant?

- AJAX stands for Asynchronous JavaScript and XML
- AJAX is used when the browser wants to make HTTP requests to the server without a page refresh
- It's AJAX that makes single-page applications (SPAs) possible


### What are some of the primitive types in JavaScript?
- Number
- String
- Boolean
- Null
- Undefined


### Write jQuery to select all anchor tags on the page. Then add a `foo` class to each one.
```js
$('a').addClass('foo');
```

### Write jQuery to change the `<div class="foo">` element to have "Hello World" as its text.
```js
// Both are acceptable
$('div.foo').text('Hello World');
$('div.foo').html('Hello World');
```


### Write a loop for summing all of the numbers from 1 to 100. In other words, `1 + 2 + 3 + 4 ... + 100`
```js
var count = 0;
for (var i = 1, i <= 100; i++) {
    count += i;
}
```

### What defines a scope in JavaScript? 
- A function


### What is Common JS?
- A pattern for requiring (or including) JavaScript files known as modules into one-another.



# CSS and Sass

### Explain the difference between a Child Selector and a Descendant selector. 
- Child selectors select direct children of the parent element, such as `div > p`
- Descendant selectors select all children of the parent element, such as `div p`


### What is general purpose behind using a CSS Reset or CSS Normalize?
- Adjust the default settings to make tags more similar to each other
- Fix browser bugs and issues
- Establish a baseline


### Where do resets go relative to the rest of the CSS?
- First, before any other CSS


### Whare are at least two HTML elements that have a default margin?
- `<h1>` to `<h6>`
- `<body>`
- `<ul>`
- `<ol>`
- `<p>`


### What are some characteristics of `block` elements
- Full Width of Container
- Takes a whole line to itself
- Padding and Margin works as expected


### What are the two common default `display` values that almost all elements have?
- Inline
- Block


### Explain the Box Model and the layers
- All HTML elements (tags) create a box model
- The layers of the box model from the inside out are Content, Padding, Border, Margin
- The box-model describes the rules about how elements get layed out


### If two boxes are side-by-side with a width of `100px` each, padding of `10px` each, and borders of `1px` each, what will the overall width be?
- 244px


### What CSS could we add to the two elements to make them take up 200px wide instead of 244px?
```css
box-sizing: border-box;
```

### Explain "Adjacent Sibling Collapsing Margins"
- Margins of adjacent siblings will overlap such that the larger of the two margins becomes the gap.


### What are the possible values for the `position` property?
- `static`
- `fixed`
- `absolute`
- `relative`


### What is the default value for elements in terms of their `position` property
- `static`


### What can be done to "contain" absolute or fixed positioned elements?
- Nothing


### What are the two main rules of OOCSS

- Separation of structure from design (aka layout from skin)
- Separation of containers from content (aka layout from components)


### What are some of the basic features of Sass
- Variables
- Nesting
- Mixins
- Extends
- Including Partials





# Workflow: Git, GitHub, Bower, NPM, and Gulp


### What is the difference between Git and GitHub
- Git is a technology tracking code with version control
- GitHub is a website that allows developers to host git projects


### What is the purpose of branching?

- To create feature branches to test code before it's committed to the master branch
- To separate the production ready code (the master branch) from the development code (the dev branch)


### What is Bower used for?
- Dependency management for third-party JavaScript and CSS code, mainly for the front-end


### Which command creates the package manifest?
```sh
bower init
```

### What is npm used for?
- Dependency management for third-party JavaScript code, mainly for the back-end but also sometimes for the front-end


### What is Gulp? And what common tasks can it be used for?
- A build system
- A tool that helps facilitate concatenation and minification of files
- Can turn Sass files into CSS files
- Can do Linting
- Can start your development servers
- Can be used with module tools like Browserify and Require.js


### Which file should contain the Gulp task definitions?
- `gulpfile.js` in the project root