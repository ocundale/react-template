# React Basic Setup

### Client-side package management:
```npm install modules```

### GULP:
* Look at main.js to see gulp tasks, eg. rebundle on save etc
* JSX task- transpiles html etc enabling you to write readable code within js
* For example, enables you to simplify so React.createElement('p',{className:'test'}) can just be <p className="test">

### Get going
* Get main.js setup by including modules
* var React = require('react'); etc

### Create initial component

![1](https://github.com/ocundale/react-template/blob/master/images/1.png)

* Add it to the page
* Require react DOM: ReactDOM.render('<component />', document.getElementById('main') );


Very easy to render javascript variables/objects

![2](https://github.com/ocundale/react-template/blob/master/images/2.png)

Add code to components, make app to hold these

![3](https://github.com/ocundale/react-template/blob/master/images/3.png)

Update the rendering statement to render App
ReactDOM.render('<App />', document.getElementById('main') );

Pass data to components via props (in format of html attribute)

These are then accessable from the component, eg see below {this.props.tagline}
![4](https://github.com/ocundale/react-template/blob/master/images/4.png)

See the console.log of this.props? This logs out the object:
![5](https://github.com/ocundale/react-template/blob/master/images/5.png)

(Lesson 7)

Routing- display certain components on certain pages

![6](https://github.com/ocundale/react-template/blob/master/images/6.png)

#### COMPILE ERRORS?
* return more than one element?
* className?
