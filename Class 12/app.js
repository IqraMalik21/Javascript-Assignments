// var arr = ["cat", "Dog", "donkey"];
// var arr1 = new Array("Iqra", "Midhat", "Komal", "Rida");
// console.log(arr);
// console.log(arr[4]="Elephant");


// arr.push("rat");
// document.write(arr);
// document.write("<br>");
// arr.pop("rat");
// document.write(arr);

// document.write("<br>");
// arr.shift(); //shuru ka element nikal (pop) jata hai
// document.write(arr);
// document.write("<br>");


// arr.unshift("mice"); // shuru ka element insert (push)
// document.write(arr);
// document.write("<br>");

// document.write("<br>");
// var arr = ["cat", "Dog", "donkey","elephant"];
// arr.splice(2,1,"giraffe"); // 2nd index pe 1 element ko nikal k giraffe insert kardo

// document.write("<br>");
// arr.splice(0,1); // to delete only one elemnt from zeroth index

// document.write("<br>");
// var array2= arr1.slice(2,3); //start at 2nd index and end at 3rd index 

// for (var i=1; i<5;i++){
//     console.log(i+"<br>");
// }


//PALINDROME WORDS
// var word=prompt();
// var i;
// for(i=0;i<word.length;i++){
//     if(word[i]===word[word.length-i-1]){
//         continue;
//     }
//     else {
//         break;
//     }
// }
// if(i===word.length){
//     document.write("Its pallindrome");
// }
// else{
//     document.write("Its not pallindrome");
// }
//end

// var name="IQRA"
// document.write("<br>"+name.toLowerCase());
// name.toUpperCase();

// //Finding Segments
// document.write("<br>"+name.indexOf("Q"));

// var num=prompt(); // prompt takes string input so for + convert into integer
// alert((+num)+(+num));

// var n= name.slice(3);
// console.log(n);

// var text= 'When You are told that you can\'t that\'s when you can. can yes can yes can';
// var first=text.indexOf('are'); // left to right find karega
// var last=text.lastIndexOf('are');  // right to left find karega
// console.log(text);

// var find=text.charAt(2); // returns charcter at index 2
// console.log(find);
// text=text.replace("can.", "will"); //replaces the first occurence of can.
// console.log(text);
// text=text.replace(/can/g, "will");  // replaces all occurences of can
// console.log(text);

//  var num= 10.5;
// // console.log(Math.round(num));
// // console.log(Math.floor(num));
// // console.log(Math.ceil(num));
// //console.log(Math.random(num)); //returns a number in the range of zero to 1
// //console.log(Math.random(num) * 100); //returns a number in the range of zero to 100
// var control = Math.random() * 100;
// console.log(control);
// console.log(control.toFixed(10)); //controls the length of decimal to five numbers and controls the length by rounding of (output will be in string)

// //Convert string into number
// console.log(Number("10"));
// console.log(parseInt("10"));

// //Convert number to string
// console.log(num.toString());

//var a = new Date();
//console.log(a);

// console.log(typeof(a));
//var b = a.toString();
//console.log(typeof (b));
// console.log(b);
//var c = b.slice(0, 3);
//console.log(c);
//console.log(typeof (c));


//datee = new Date();
//datee.setFullYear("2000"); // Sb get k Sath set wale bhi hain  functions
//console.log(datee);
// console.log(datee.getDay()); // Returns the index of day
// console.log(datee.getMonth()); // Returns the index of Month
// console.log(datee.getDate());
// console.log(datee.getHours());
// console.log(datee.getMinutes());

// console.log(datee.getSeconds());
// console.log(datee.getMilliseconds());
// console.log(datee.getTime()); // Calculates Milliseconds since midnight, January 1, 1970
// console.log(datee.getTime() / 1000 * 60 * 60 * 24 * 30 * 12); // Convert into 

// // console.log(datee.getFullYear()); // Sare predefined fuctiona ajate hain in suggestions
// console.log(datee.getTime());  // Calculates miliseconds since January 1, 1970 
// console.log(datee.getTime()/(1000*60*60*24*30*12)); // to convert into years
// datee.setFullYear(2013); // Sare predefined fuctiona ajate hain in suggestions
// console.log(datee);

//console.log(("f" + "i" + +"a" + "c" + "e").toLowerCase());
var dob = new Date(prompt("Enter Your Date of Birth", "Jan 1, 1970"));
//var dob = new Date("Nov 21, 2000");
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var diffyear = diff / (1000 * 60 * 60 * 24 * 30 * 12);
var age = Math.floor(diffyear);
console.log(age);












