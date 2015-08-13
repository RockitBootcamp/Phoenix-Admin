# Front-end Mock Technical Questions

## Guidelines

- Interviews should last 60 minutes or less
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
- MVC with Backbone.js
- CSS / Sass
- Workflow: Git, GitHub, Bower, NPM, and Gulp


> **Note that the question in each section are ordered from easiest to most difficult to help you gauge student skill level**



# JavaScript / jQuery

### Why is Style Consistency so important?

- Makes code more uniform
- Easier to read
- Easier to maintain
- Reduces bike-shedding if a team follows a style guide (bonus)


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

### What defines a scope in JavaScript?

- A function


### What is a callback?

- A function that's passed to another function so it can be called later when that function has finished executing


### Where have you used callback functions in class?

The most common they've seen are:

- jQuery's "document.ready"
- Ajax within the `.done()` method
- jQuery events
- Backbone routers
- Backbone views


### What is the difference between `==` and `===`?

- The `==` operator *coerces* values to check equality
- The `===` is a strict-equality operator (it does not coerce values)
- (Bonus:) `===` should be preferred


### Assume a button was just clicked, explain event bubbling?

- The button will be considered the target of the click event.
- Each parent of the target will experience a click event going from the inside-out, from the target towards the `document`


### How can event bubbling be canceled?

- `e.preventDefault()`
- `event.preventDefault()`



### Write a loop for summing all of the numbers from 1 to 100. In other words, `1 + 2 + 3 + 4 ... + 100`

```js
var count = 0;
for (var i = 1, i <= 100; i++) {
    count += i;
}
```

### What are 2 other ways to iterate (loop)?

(Depending if they used `for`, `while` or `Array#forEach` above)

- `for`
- `while`
- `for..in`
- `Array#forEach`


### What is the `this` keyword, and what is its meaning?

- `this` refers to the *parent object*
- (same as above plus:) or sometimes refers to the `window` object (browsers)
- (same as above plus:) or `global` in Node.js
- In a jQuery event, the `this` variable refers to the event target
- (bonus) functions change the context of `this`


### Using jQuery write a method for handling keyboard events

> If the student struggles, let them know that they could use the 'keypress', 'keydown', or 'keyup' event which is very similar to doing a 'click' event

```js
// event name can be 'keypress', 'keydown', 'keyup'
$('some selector').on('keypress', function () {
  // ...
})
```

### What is an IIFE (pronounced "iffy")?

- Immediately-Invoked Function Expression
- A means to protect code with scope

```js
(function () {

}())
```


### Which Array method can be used to get a subset of the array?

- Array.slice()

### Using jQuery, write an AJAX call to `"http://jsonplaceholder.typicode.com/posts"`. When the AJAX call is done, loop and print each post's body using `console.log`.

> Tip, if the student is confused, let them navigate to the typeicode address in the browser so they can see the JSON it returns.

```js
$.get('http://jsonplaceholder.typicode.com/posts')
  .done(function (posts) {
    posts.forEach(function (post) {
      console.log(post.body)
    })
  })
```


### What is Common JS?

- A pattern for requiring (or including) JavaScript files known as modules into one-another.
- A module pattern
- The module pattern for Node.js


### Write an example of exporting several methods (`add`, `subtract`, `multiply`) using CommonJS

```js
module.exports = {
  add: function () {},
  subtract: function () {},
  multiply: function () {}
}
```


### Explain hoisting

- A function declaration is hoisted to the top of its scope
- A variable declaration will be "hoisted" to the top of its scope, but **not** its assignment


### Write a function that replaces all occurrences of the letter `s` in a string with the letter `z`

```js
function replacer(str) {
  return str.replace(/s/g, 'z')
}
```

> str.replace('s', 'z') is almost the right answer, only it will replace just one letter `s` whereas the code above with the regular expression will replaces all instances of `s`


### What is the difference between a variable that is `null`, `undefined` or undeclared?

- a variable that is `null` means it has been explicitly set to null
- a variable that is `undefined` means it has been declared, but no value has been assigned (bonus: or `undefined` was explicitly assigned)
- a variable that is undeclared doesn't exist in the code anywhere (bonus: trying to access an undeclared variable will produce a Reference Error)



# MVC with Backbone.js

### What does MVC stand for?

- Model, View, Controller

### What is a router?

- Controls which view(s) to load based on the URL (hash routing)
- It calls functions depending on which path best matches


### In Backbone, what is the relationship between a View and a templating engine, such as Handlebars?

- The view is called upon by the router to be rendered. A template is called upon by a view (typically).
- It's the view's responsibility to decide what to render. A template's responsibility is to generate HTML.
- The view passes data into the template. The template generates HTML from data it receives.


### Write a Backbone Model with the following values: name: 'Batman', vehicle: 'Batmobile'

First Way, assumes defaults
```js
var Superhero = Backbone.Model.extend({
  defaults: {
    name: 'Batman',
    vehicle: 'Batmobile'
  }
})
```

Second Way, adds values on instance
```js
var Superhero = Backbone.Model.extend({});

var batman = new Superhero({
    name: 'Batman',
    vehicle: 'Batmobile'
  })
```

Third Way, adds values after instance
```js
var Superhero = Backbone.Model.extend({});

var batman = new Superhero();
batman.set('name', 'Batman');
batman.set('vehicle', 'Batmobile');
```

### Initiate an instance of `UserCollection` - assume the UserCollection code (class) already exists. Call the appropriate methods to have the collection instance fetch data from the server.

```js
// This is the part that the student should assume already exists. If they get confused,
// you can show them this code and read the question again. 
var UserCollection = Backbone.Collection.extend({
  url: '/some/path/'
});


// This is what we asked the use to write
var userCollection = new UserCollection();

userCollection.fetch().done(function (data) {
  console.log(data)
})
```


### Write a Backbone router that has at least one route with a parameter

> The student can have variance on this solution since there are many ways to do this correctly

```js
var Router = Backbone.Router.extend({
  routes: {
    'users/:id': 'getUserById'
    //     ^^^ router parameter (`:` followed by a word)
  },

  getUserById: function (id) {
    // check that the student used an `id` parameter here
  }
})
```


### Write a Backbone View that uses Handlebars to render a simple template

- Assume the View uses the `main` element
- The template's HTML can just be a single tag, hardcoded as a string passed into `Handlebars.compile()`

> The student can have variance on this solution since there are many ways to do this correctly

```js
var MyView = Backbone.View.extend({
  el: 'main',

  template: Handlebars.compile('<h1>{{greeting}}</h1>'),

  render: function () {
    var result = this.template({greeting: 'Hello world'});
    this.$el.html(result)
  }
})
```


## What other frameworks or libraries have you used?

Some students have learned

- jQuery
- Handlebars
- Node.js (Express)
- AngularJS
- Lodash
- *others*


# CSS and Sass

### In terms of the DOM, what is the difference between a class and an ID?

- IDs should only be used once per page
- Classes can be used multiple times per page
- When writing CSS selectors, it's generally encouraged to use class names over IDs for lower CSS specificity. Lower specificity is desired


### Explain the difference between a Child Selector and a Descendant selector.

- Child selectors select direct children of the parent element, such as `div > p`
- Descendant selectors select all children of the parent element, such as `div p`


### What is general purpose behind using a CSS Reset or CSS Normalize?

- Adjust the default settings to make tags more similar to each other
- Fix browser bugs and issues
- Establish a baseline
- Resets the rules to be different than the browser's default


### Where do resets go relative to the rest of the CSS?

- First, before any other CSS


### What are at least two HTML elements that have a default margin?

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

```
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


### What are some ways to "clear" floats

- `overflow: hidden` or `overflow: auto` on the container
- Using a pseudo `::after` element with `clear: both`


### What are some of the basic features of Sass

- Variables
- Nesting
- Mixins
- Extends
- Including Partials


# Workflow: Git, GitHub, Bower, NPM, and Gulp


### What is the difference between Git and GitHub

- Git is a version control system: it tracks changes made to a codebase
- GitHub is a website that allows developers to host git repositories as projects


### What is the purpose of branching?

- To create feature branches to test code before it's committed to the master branch
- To separate the production ready code (the `master` branch) from the development code (the `develop` branch)


### What is Bower used for?

- Dependency management for third-party JavaScript and CSS code, mainly for the front-end


### Which command creates the bower.json manifest?

```sh
bower init
```

### What is npm used for?

- Dependency management for third-party JavaScript code, known as packages or modules


### What is Gulp? And what common tasks can it be used for?

- It's a build system (bonus for mentioning streaming)
- It's a tool that helps facilitate routine tasks
- Can do concatenation and minification of files
- Can turn Sass files into CSS files
- Can do Linting
- Can start your development servers
- Can be used with tools like Browserify


### Which file should contain the Gulp task definitions?

- `gulpfile.js` in the project root
