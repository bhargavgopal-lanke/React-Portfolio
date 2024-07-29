if (true) {
  console.log("this is true");
}

if (false) {
  console.log("this is NOT true");
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else {
  console.log(`${x} is not greater than ${y}`);
}

// date example

const d = new Date();

const hour = d.getHours();
const minutes = d.getMinutes();

console.log("d", hour);
console.log("d minutes", minutes);

if (hour < 12) {
  console.log("Good Morning!");
} else if (hour > 12) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

var expect = function (val) {
  if (val === 5) {
    return JSON.stringify({ value: true });
  } else {
    console.log("error");
  }
};

console.log(expect(5));

const email = "test@test.com";

// a string with anything in it is a truthy value
if (email) {
  console.log("you passed in an email");
}

console.log(Boolean(email));

// falsy values in javascript
// - false
// - 0
// - "" or '' an empty string
// - null
// - undefined
// - nan

// truthy values in javascript

// - everthing that is not falsy
// - true
// - '0' => 0 in an empty string
// - 'false'   a string with any value in it
// -  [] => an empty array is also truthy
// -  {} => an empty object is also truthy
// - function() => an empty function is also truthy

const z = "";

if (z) {
  console.log("this is truthy");
} else {
  console.log("this is falsy");
}

// truthy and falsy caveats

const children = 4;
// for 0 if children is not an number
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("please enter number of children");
}

// checking for empty arrays

const posts = [];

if (posts) {
  console.log("Posts");
} else {
  console.log("No posts to list");
}

// checking for empty objects

const user = {
  name: "bhargav",
};

if (Object.keys(user).length > 0) {
  console.log("List user");
} else {
  console.log("no user");
}
