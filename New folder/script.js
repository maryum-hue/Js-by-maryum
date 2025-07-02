// 1. check number or uppercase or lowercase
var char = prompt("enter any character");

var code = char.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("it is a number");
} else if (code >= 65 && code <= 90) {
    alert("it is an uppercase letter");
} else if (code >= 97 && code <= 122) {
    alert("it is a lowercase letter");
} else {
    alert("other character");
}

var num1 = parseint(prompt("enter first integer"));
var num2 = parseint(prompt("enter second integer"));

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("both numbers are equal");
}

var num = parsefloat(prompt("enter a number"));

if (num > 0) {
    alert("the number is positive");
} else if (num < 0) {
    alert("the number is negative");
} else {
    alert("the number is zero");
}

var ch = prompt("enter a single character");

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    alert("true");
} else {
    alert("false");
}

var correctpass = "pakistan123";
var userpass = prompt("enter your password");

if (userpass === "") {
    alert("please enter your password");
} else if (userpass === correctpass) {
    alert("correct! the password you entered matches the original password");
} else {
    alert("incorrect password");
}

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "good day";
} else {
    greeting = "good evening";
}

alert(greeting);

var time = parseint(prompt("enter time in 24 hour format (like 1900)"));

if (time >= 0 && time < 1200) {
    alert("good morning");
} else if (time >= 1200 && time < 1700) {
    alert("good afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("good evening");
} else if (time >= 2100 && time <= 2359) {
    alert("good night");
} else {
    alert("invalid time");
}
