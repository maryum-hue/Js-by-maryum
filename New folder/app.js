var city = prompt("enter your city name");
if (city === "karachi") {
    alert("welcome to city of lights");
}

var gender = prompt("enter your gender (male/female)");
if (gender === "male") {
    alert("good morning sir");
} else if (gender === "female") {
    alert("good morning ma’am");
}

var color = prompt("enter traffic signal color (red/yellow/green)");
if (color === "red") {
    alert("must stop");
} else if (color === "yellow") {
    alert("ready to move");
} else if (color === "green") {
    alert("move now");
}

var fuel = parsefloat(prompt("enter remaining fuel in litres"));
if (fuel < 0.25) {
    alert("please refill the fuel in your car");
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialcost = 20000;
var laborcost = 2000;
var totalcost = materialcost + laborcost;
if (totalcost === laborcost + materialcost) {
    alert("the cost equals");
}

// e
if (true) {
    alert("true");
}
if (false) {
    alert("false");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var subject1 = parsefloat(prompt("enter marks obtained in first subject"));
var subject2 = parsefloat(prompt("enter marks obtained in second subject"));
var subject3 = parsefloat(prompt("enter marks obtained in third subject"));
var totalmarks = parsefloat(prompt("enter total marks"));

var obtainedmarks = subject1 + subject2 + subject3;
var percentage = (obtainedmarks / totalmarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "a-one";
    remarks = "excellent";
} else if (percentage >= 70) {
    grade = "a";
    remarks = "good";
} else if (percentage >= 60) {
    grade = "b";
    remarks = "you need to improve";
} else {
    grade = "fail";
    remarks = "sorry";
}

document.write("<h3>marks sheet</h3>");
document.write("total marks: " + totalmarks + "<br>");
document.write("marks obtained: " + obtainedmarks + "<br>");
document.write("percentage: " + percentage.tofixed(2) + "%<br>");
document.write("grade: " + grade + "<br>");
document.write("remarks: " + remarks + "<br>");

var secretnumber = 7;
var guess = parseint(prompt("guess the secret number (1-10)"));
if (guess === secretnumber) {
    alert("bingo! correct answer");
} else if (guess + 1 === secretnumber) {
    alert("close enough to the correct answer");
}

var number = parseint(prompt("enter a number"));
if (number % 3 === 0) {
    alert("the number is divisible by 3");
} else {
    alert("the number is not divisible by 3");
}

var num = parseint(prompt("enter a number"));
if (num % 2 === 0) {
    alert("even number");
} else {
    alert("odd number");
}

var temperature = parsefloat(prompt("enter temperature"));
if (temperature > 40) {
    alert("it is too hot outside");
} else if (temperature > 30) {
    alert("the weather today is normal");
} else if (temperature > 20) {
    alert("today's weather is cool");
} else if (temperature > 10) {
    alert("omg! today's weather is so cool");
}

var firstnumber = parsefloat(prompt("enter first number"));
var secondnumber = parsefloat(prompt("enter second number"));
var operation = prompt("enter operation (+, -, *, /, %)");

var result;

if (operation === "+") {
    result = firstnumber + secondnumber;
} else if (operation === "-") {
    result = firstnumber - secondnumber;
} else if (operation === "*") {
    result = firstnumber * secondnumber;
} else if (operation === "/") {
    result = firstnumber / secondnumber;
} else if (operation === "%") {
    result = firstnumber % secondnumber;
} else {
    alert("invalid operation");
}

if (result !== undefined) {
    alert("result: " + result);
}
