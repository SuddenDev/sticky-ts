# sticky-ts
WIP: This library is a fork from [Rgalus' sticky js](https://github.com/rgalus/sticky-js), and it aims to add TS support, add features and fix bugs

> Sticky-ts is a library for sticky elements written in vanilla javascript. With this library you can easily set sticky elements on your website. It's also responsive.

[DEMO](https://rgalus.github.io/sticky-js/)

## Features

- Written in vanilla javascript, no dependencies needed
- Lightweight (minified: ~7.0kb, gzipped: ~1.9kb)
- It can be sticky to the entire page or to selected parent container
- No additional CSS needed

## Install

````
npm install sticky-js
````

````
bower install sticky.js
````

## Usage

Simply include

```html
<script src="sticky.min.js"></script>
```

Then have element

```html
<div class="selector">Sticky element</div>
```

Initialize in javascript

```js
var sticky = new Sticky('.selector');
```

Syntax

```js
new Sticky([selector:string], [global options:object])
```

CommonJS
```js
var Sticky = require('sticky-ts');

var sticky = new Sticky('.selector'); // or a HTML element 
```

## Examples

Multiple sticky elements with data-sticky-container and [options](https://github.com/SuddenDev/sticky-ts#available-options)

```html
<div class="row" data-sticky-container>
  <div class="medium-2 columns">
    <img src="http://placehold.it/250x250" class="sticky" data-margin-top="20" data-sticky-for="1023" data-sticky-class="is-sticky">
  </div>
  <div class="medium-8 columns">
    <h1>Sticky-js</h1>
    <p>Lorem ipsum.....</p>
  </div>
  <div class="medium-2 columns">
    <img src="http://placehold.it/250x250" class="sticky" data-margin-top="20" data-sticky-for="1023" data-sticky-class="is-sticky">
  </div>
</div>

<script src="sticky.min.js"></script>
<script>
  var sticky = new Sticky('.sticky'); // or a HTML element 
</script>
```

## Methods

Update sticky, e.g. when parent container (data-sticky-container) change height

```js
var sticky = new Sticky('.sticky');

// and when parent change height..
sticky.update();
```

Destroy sticky element

```js
var sticky = new Sticky('.sticky');

sticky.destroy();
```

## Available options

Option | Type | Default | Description
------ | ---- | ------- | ----
data-sticky-wrap | boolean | false | When it's `true` sticky element is wrapped in `<span></span>` which has sticky element dimensions. Prevents content from "jumping".
data-margin-top | number | 0 | Margin between page and sticky element when scrolled
data-sticky-for | number | 0 | Breakpoint which when is bigger than viewport width, sticky is activated and when is smaller, then sticky is destroyed
data-sticky-class | string | null | Class added to sticky element when it is stuck


```js
// or use it directly like this
var sticky = new Sticky('#header', {
   wrap: true,
   marginTop: 20,
   stickyClass: 'stick-me'
});
```

## Events

Currently there's only one event.

### onChange

```js
var stickyEl = new Sticky(el, {
  onChange: (val) => {console.log("isSticky", val);} // val: boolean if sticky
});
```

### Development

Clone this repository and run

```js
npm start
```

## Browser Compatibility

Library is using ECMAScript 5 features.

* IE 9+
* Chrome 23+
* Firefox 21+
* Safari 6+
* Opera 15+

If you need this library working with older browsers you should use ECMAScript 5 polyfill.

[Full support](http://caniuse.com/#search=ECMAScript%205)

* * *

### Website

https://rgalus.github.io/sticky-js/

### License

[MIT License](https://github.com/rgalus/sticky-js/blob/master/LICENSE)
