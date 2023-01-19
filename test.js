let value = false;
console.log(String(value) + value);
console.log(typeof(String(value)));
console.log(typeof(value));
console.log("6"/"2");

let str = "665";
console.log(typeof(Number(str)));
console.log(typeof(str));

let str1 = "";
console.log(Boolean(str1));

let x = 1;
x = -x;
console.log(x); 

let num = 10;
let num1 = 2;
let sum = num ** num1;
console.log(sum);

let x = "1";
console.log(`The result is ${x} and the type is ${typeof(x)}`); 

let apples = "2";
let oranges = "3";
console.log(+apples + +oranges);
//console.log(Number(apples) + Number(oranges));

let a, b, c;
a = b = c = 2 + 2;
console.log(a);
console.log(b);
console.log(c);

let n = 2;
n = n + 5;
n = n * 2;
console.log(n); 

let counter = 1;
let a = ++counter;
console.log(a);

let counter1 = 1;
let a1 = counter1++;
console.log(a1); 

 let result = 5 > 4;
console.log(result);

let a = 0;
console.log(Boolean(a));

if (0) {
  console.log("empty");
} else {
  console.log("not empty");
} 

//let result1 = condition ? value1 : value2;
 let age = 18;

let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed); 

let i = 0;

while (i < 10) {
  i++;
  console.log(i);
} 

 for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("This number is even:", i);
  }
}


 let i = 2;
while (i < 10) {
  if (i % 2 == 0) {
    console.log("This number is even:", i);
  } else {
    console.log("The number is odd:", i);
  }
  ++i;
} 
 let num;
do {
  num = console.prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num > 0);

 let a = 2+3;

switch(a){
  case 
} 

 let browser = "Chrome";

if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if (browser == "Chrome") {
  console.log("You've got the Chrome!");
} else {
  console.log("Hope this page is okay!");
}
 
 function showMessage() {
  console.log("Hello World!");
}
showMessage(); 
let userName = "John";
function showName() {
  let message = "Hello " + userName;
  console.log(message);
}
showName(); 
function showMessage(name, text) {
  console.log(`My name is ${name} and my text is ${text}`);
}
showMessage("John", "Hello World!");

 function sum(a, b) {
  return a + b;
  
}
let result = sum(10, 20);
console.log(result); 

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log("Do you have permission from your parents?");
  }
}
let age = 18;

if (checkAge(age)) {
  console.log("Access granted!");
} else {
  console.log("Access denied!");
} 
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) {
      console.log(i);
    }
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
}
showPrimes(10); 
 function sayHi() {
  console.log("Hello");
}
let val = sayHi;
for (let i = 0; i < 5; i++) {
  console.log(val());
} 
 function Ask(question, yes, no) {
  let answer = "yes";
  if (answer == "yes") {
    return true;
  } else if (answer == "no") {
    return false;
  } else {
    return console.log("Please answer with yes or no");
  }
}
function showOk() {
  console.log("You agreed.");
}
function showNo() {
  console.log("You disagreed.");
}
Ask("Do you agree?", showOk, showNo);

 let sum = (a, b) => a + b;
console.log(sum(10, 20)); 
 let sum = (a, b) => {
  let res = a + b;
  console.log(res);
};
sum(10, 20); 
 let ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};
showOk = () => console.log("You agreed.");
showNo = () => console.log("You disagreed.");
ask("Do you agree?", showOk, showNo); 

let user = {
  firstName: "John",
  lastName: "Doe",
};
let key = "firstName";

console.log(user.firstName);
console.log(user.lastName);
console.log(user[key]); 
let fruit = "apple";

let bag = {
  [fruit]: 5,
};
console.log(bag.apple);
