/*
//from https://www.youtube.com/watch?v=PFmuCDHHpwk
//object literal, a collection of key value pairs
const circle = {
    //properties
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    //method
    draw: function() {
        console.log('draw');
    }   
};

circle.draw();
*/

//factory function:it returns an object
function createCircle(radius) {
    return {
        //properties here 'radius: radius' can be written as 'radius'
        radius,
        draw: function () {
            console.log('draw from factory function');
        }
    }
};

const circleFactory = createCircle(20);

//constructor function: in javascript there is no concept of classes
//new creates an empty object and this point to that object (otherwise 'this' would be global, pointing to window)
//'return this' is automatical
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw from object');
    }
}
const other = new Circle(5);

//circleFactory.constructor has an implicit constructor Object()
//other.constructor not

let x = {}; //is let x = new Object();
//other construcors: new String()
//we often use string litterals using literals like
// double quotes, quotes and backticks " " '' ‘‘
//new Boolean(); but we better use boolean literals true or false
//new Number(); we use numbers literals like 1 2 3
//every object has a constructor


//a function is an object
//Circle.name Circle.length
//Circle.constructor uses internally Function() constructor

const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function () {
    console.log('draw from object');
}
`);

const circleback = new Circle1(1);

/*
call method: the first argument specifies the target of 'this'
Circle.call({},1);
is the same as
circle = new Circle(1);
this will reference the empty object {}
*/

/*
when no new is used, this refers to window
circle =  Circle(1);
is the same as
Circle.call(window, 1)

*/

/*
apply method to pass an array
Circle.apply({}, [1,2,3,4]);
*/

/*
primitives:
    Number
    String
    Boolean
    Symbol
    undefined
    null
reference types:
    Object
    Function
    Array

primitives are copied by vale:

x = 10
y = x
x = 20
y //10
x //20

reference types are copied by reference:

x = {value: 10}
y = x //it is the address that is copied
x.value = 20
y.value //20
x.value //20

here it is the address that is copied,
the object is not stored in the variable, is somewhere else in memory,
the address of the object is stored in that variable
x and y are pointing to the same object in memory.

*/

/* primitivies are copied by value:

let num = 10;
function add(num) {
    num++;
}
add(num);
console.log(num);//10 

the num outside the function and the one inside are two different things

*/

/*
Object are copied by reference:

let obj = {value: 10};
function add(x){
    x.value++;
}
add(obj);
console.log(obj.value); //11

we are not dealing with 2 different copies
*/

/*
in javascript there are no real objects, so we can add methods to objects,
not like in other languages, like c#, where one needs to change the class definition
circle.location = {x: 1}
*/

other.location = {x: 1}

/*
there are 2 notqtions:
other.location = {x: 1}
or
other['location'] = {x: 1}

the first way is less verbose and simpler
*/

/* 39:44
dynamically acess a property name using brackets notation
const propertyName = 'location';
other[propertyName] = {x: 13}

when you have 
const propertyName = 'property-location';
then the way to access it is by using brackets notation
*/

//dinamically delete properties
/*
delete other.location
or
delete other['location']
*/

/*
//enumerate properties
for (let key in other){
    console.log(key); //radius draw location
}
//get keys
for (let key in other){
    console.log(other[key]); //radius draw location
}
//get keys without functions
for (let key in other){
    if (typeof key !== 'function') {
        console.log(other[key]); //radius draw location
    }
    
}
*/
for (let key in other){
    if (typeof key !== 'function') {
        console.log(other[key]); //radius draw location
    }
}

/*
keys function returns an array of keys
*/
console.log('keys: ');
const keys = Object.keys(other);
console.log(keys);

//check if props\erty is present
if ('radius' in other)
    console.log('circle has radius');
/*
private attributes do not use this
ex:
function Circle(radius){
    let color = 'red';//private
    this.radius = radius
    ...
}
*/

/*
getter, how to get a private members inside class
using closures, call member as function

function MyCircle(radius){
    this.radius = radius;
    let defaultLocation = {x: 12, y: 32};
    this.getDefaultLocation = function() {
        return defaultLocation;
    }
}
const mycircle = new MyCircle(3);
mycircle.getDefaultLocation();

call it instead as a member, use getter (key 'get' has a special value):

function MyCircle(radius){
    this.radius = radius;
    let defaultLocation = {x: 12, y: 32};
    
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        }
    });
}
const mycircle = new MyCircle(3);
mycircle.defaultLocation;
*/

/*
setters:

function MyCircle(radius){
    this.radius = radius;
    let defaultLocation = {x: 12, y: 32};
    
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('invalid value')
            defaultLocation = value;
        }
    });
}
const mycircle = new MyCircle(3);
mycircle.defaultLocation = 1;//gives error
mycircle.defaultLocation = {x: 12, y:55} //Object { x: 12, y: 55 }
*/

//exercise:
function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function(){
        if (running)
            throw new Error('Stopwatch has already started.');
        running = true;
        startTime = new Date();
    }
    this.stop = function(){
        if (!running)
            throw new Error('Stopwatch is not started.');
        running = false;
        endTime = new Date();

        const seconds = (endTime.getDate() - startTime.getDate())/1000;
        duration += seconds;
    }
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}