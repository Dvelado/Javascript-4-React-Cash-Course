
// Function declaration
function DoSomething() {
    console.log("Doing something...");
}

// Arrow function declaration
const myFunction = () => {
    console.log("This is my function.");
}

// Variable declaration
let myVariable = "Hello, World!";

// Callback function
function myCallback(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
}

// Exporting functions and variables
export default {
    DoSomething,
    myFunction,
    myVariable,
    myCallback
};

// REACT STRUCTURE

const MyComponent = () => {
    return (
        <div>
            <h1>Welcome to My Component</h1>
            <p>This is a simple React component.</p>
        </div>
    );
};


<button onClick={() => {
    console.log("Button clicked!");
}}
>Click me!</button>

// Ternary operator example, NEEDS MORE STUDY
let age = 16;
let name = age > 10 ? "Pedro" : "John";
// Basicaly saying that if age is greater than 10, name will be Pedro, otherwise it will be John. Where ? means "if" and : means "else" and > is the comparison operator. Because React is a JavaScript library, it uses JavaScript syntax and operators. The ternary operator is a shorthand way of writing an if-else statement in JavaScript.

// React component using ternary operator
const Component = () => {
    return age > 10 ? <div> Pedro </div> : <div> John </div>;
}
// The above code is a React component that uses the ternary operator to conditionally render either "Pedro" or "John" based on the value of the age variable. If age is greater than 10, it will render a div with "Pedro"; otherwise, it will render a div with "John". This is a common pattern in React for rendering different content based on certain conditions.



// OBJECTS in REACT

// Deconstruct Objects
const person = {
    name : "Pedro"
    age: 20,
    isMarried: false
};

const name = person.name
const age = person.age
const isMarried = person.isMarried

// can be deconstructed like this:
const { name, age, isMarried } = person;


const name = "Pedro";
const age = 20;

const person = {
    name,
    age,
    isMarried: false
};

const person2 = {...person, name : "Jack"}

const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];


const names = ["Pedro", "Jack", "Carol"]
names.map((name) = > {
    console.log(name);
});

names.map((name) => {
    return name + "1";
});
