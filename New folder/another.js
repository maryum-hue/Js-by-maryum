var studentlist = [];

var studentarray = new Array();

var fruitlist = ["apple", "banana", "mango"];

var numberlist = [1, 2, 3, 4, 5];

var boolvalues = [true, false, true];

var mixedstuff = ["karla", 25, true];

var educationlist = ["ssc", "hsc", "bcs", "bs", "bcom", "ms", "m.phil.", "phd"];

document.write("<h3>qualifications in pakistan:</h3>");
for (var i = 0; i < educationlist.length; i++) {
    document.write((i + 1) + ") " + educationlist[i] + "<br>");
}

var studentnames = ["ali", "ahmed", "sara"];
var studentscores = [400, 350, 450];
var totalmarks = 500;

for (var i = 0; i < studentnames.length; i++) {
    var percentage = (studentscores[i] / totalmarks) * 100;
    document.write("<br>score of " + studentnames[i] + " is " + studentscores[i] + ". percentage is " + percentage + "%<br>");
}

var colorlist = ["red", "green", "blue"];
document.write("<br>initial colors: " + colorlist + "<br>");

var addstart = prompt("which color you want to add at beginning?");
colorlist.unshift(addstart);
document.write("updated colors: " + colorlist + "<br>");

var addend = prompt("which color you want to add at end?");
colorlist.push(addend);
document.write("updated colors: " + colorlist + "<br>");

colorlist.unshift("purple", "pink");
document.write("updated colors: " + colorlist + "<br>");

colorlist.shift();
document.write("updated after deleting first color: " + colorlist + "<br>");

colorlist.pop();
document.write("updated after deleting last color: " + colorlist + "<br>");

var addindex = parseint(prompt("at which index you want to add a color?"));
var colorname = prompt("enter color name to add");
colorlist.splice(addindex, 0, colorname);
document.write("updated colors: " + colorlist + "<br>");

var delindex = parseint(prompt("at which index you want to delete color(s)?"));
var delcount = parseint(prompt("how many colors you want to delete?"));
colorlist.splice(delindex, delcount);
document.write("updated colors: " + colorlist + "<br>");

var markslist = [320, 230, 480, 120];
document.write("<br>scores of students: " + markslist + "<br>");
markslist.sort();
document.write("sorted scores of students: " + markslist + "<br>");

var citylist = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
var selectedcities = citylist.slice(0, 3);
document.write("<br>cities list: " + citylist + "<br>");
document.write("selected cities list: " + selectedcities + "<br>");

var wordarray = ["this ", " is ", " my ", " cat"];
var joinedstring = wordarray.join("");
document.write("<br>" + joinedstring + "<br>");

var device = [];
device.push("keyboard");
device.push("mouse");
device.push("printer");
device.push("monitor");

document.write("<br>fifo order:<br>");
document.write(device.shift() + "<br>");
document.write(device.shift() + "<br>");
document.write(device.shift() + "<br>");
document.write(device.shift() + "<br>");

var devicestack = [];
devicestack.push("keyboard");
devicestack.push("mouse");
devicestack.push("printer");
devicestack.push("monitor");

document.write("<br>lifo order:<br>");
document.write(devicestack.pop() + "<br>");
document.write(devicestack.pop() + "<br>");
document.write(devicestack.pop() + "<br>");
document.write(devicestack.pop() + "<br>");

var phonelist = ["apple", "samsung", "motorola", "nokia", "sony", "haier"];

document.write("<br><select>");
for (var i = 0; i < phonelist.length; i++) {
    document.write("<option>" + phonelist[i] + "</option>");
}
document.write("</select>");
