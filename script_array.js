// Initialize array
// var names = ["Dan", "Sume", "San"];

// retrieve/access elements from array
// var names = ["Dan", "Sume", "San"];
//console.log(names.length);
//console.log(names[1]);

// Mutate elements (change elements)
// var names = ["Dan", "Sume", "San"];
// names[1] = "Lan";
// console.log(names[1]);

// Create positions in array
// var names = ["Dan", "Sume", "San"];
// names[6] = "Din";
// console.log(names);

// Mutate Array (add or remove elements from array)
// var names = ["Dan", "Sume", "San"];
// console.log(names.length);

// Different data types can be added in array
// var diffArray = ["Eric", 190, true, "MyStuff", 20000];

//Different types of eleements in array
// var diffArray = ["Eric", 190, true, "MyStuff", 20000];

// Methods in arrays
// var names = ["Eric", 190, true, "MyStuff", 20000];
// names.push(1980);// Add an element to the last
// console.log(names);
// names.unshift("Linda");// Add an element to the beginning of the array;
// console.log(names);
// names.pop();// Remove an element from the end of the array;
// console.log(names);
// names.shift();// Remove an element from the beginning of the array;
// console.log(names);
// console.log(names.indexOf(190));//IndexOf - find the position of an element in Array
// console.log(names.indexOf("MyStuff"));
// console.log(names.indexOf("12")); //Main use is to find if an element is in an array

// Use case to test if a user is a designer
// var john = [];
// john.push("Mr", "John", "Smith", "New Company", "Developer", 20, true, 1982);
// // console.log(john);
// // console.log(john.indexOf("designer"));

// var isDesigner =
//   john.indexOf("designer") === -1
//     ? "John is not a designer"
//     : "John is a designer";
// console.log(isDesigner);// Use case to test if a user is a designer using the If/Else ternary operator

// CODING CHALLENGE 2 FUNCTION AND ARRAYS
// Bills are $124, $48, $368
// Tip
// 20% of the bill when the bill is less than $50,
// 15% when the bill is less than $50 and $300
// 10% when the bill is less more than $300
// Create 2 arrays with all three tips and all three amounts

//SOLUTION

// //Step 1 = create a function to find the tip amount from the receipt amount
// var tipPercent = function(receiptAmount) {
//   switch (true) {
//     case receiptAmount < 50:
//       return receiptAmount * (20 / 100);
//     case receiptAmount > 50 && receiptAmount < 200:
//       return receiptAmount * (15 / 100);
//     case receiptAmount > 200:
//       return receiptAmount * (10 / 100);
//   }
// };
// //Step 2 = Create arrays
// var bills = [124, 48, 268];
// var tips = [tipPercent(bills[0]), tipPercent(bills[1]), tipPercent(bills[2])];
// var finalPayment = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips);
// console.log(finalPayment);
