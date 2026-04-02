// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// let firstName=prompt("Enter your first name ");
// let lastName=prompt("Enter your last name ");


// document.writeln(firstName + lastName);

// _______________________________________________________________


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser 

// let info=prompt("Enter your favorite mobile phone model");
// document.writeln(`My Favourite phone is ${info} <br>`);
// document.writeln(`lenght of string is :  ${info.length}`)

// _________________________________________________________________________

// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser . 

// let word= "Pakistani";
// let index= word.indexOf("n");

// document.writeln("String: " + word + "<br>");
// document.writeln("Index of 'n': " + index);


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.


// let msg="Hello World";
// let index=msg.lastIndexOf("l");

// document.writeln(`
//     Srting:${msg}<br>
//     last index of 'l' is ${index}
//      `)
// _________________________________________________________________________

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser. 

// let word="Pakistani";
// let char=word.charAt(3);

// document.writeln("String: " + word + "<br>");
// document.write("Character at index 3: " + char);
// _________________________________________________________________________

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");


// let fullName = firstName.concat(" ", lastName);

// document.writeln("Hello " + fullName);

// _________________________________________________________________________

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// let word="Hyderabad";
// let newWord=word.replace("Hyder","Islam");

// document.write("Before: " + word + "<br>");
// document.write("After: " + newWord);
// _________________________________________________________________________

// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser.


// var message = "Ali and Sami are best friends. They play cricket and football together."; 

// var update=message.replaceAll("and","&");

// document.write("Before: " + message + "<br><br>");
// document.write("After: " + update);
// _________________________________________________________________________

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// let str="472";
// let num=parseInt(str);

// document.writeln("Value: " + num + "<br>");
// document.writeln("Type: " + typeof num);

// _________________________________________________________________________

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// let userInput=prompt("Enter any text");
// let UppercaseInput=userInput.toUpperCase();


// document.writeln("User input: " + userInput + "<br>");
// document.writeln("In capital letters: " + UppercaseInput);
// _________________________________________________________________________

// 11. 
// Write a program that takes user input. Convert and 
// show the input in title case.


// let input =prompt("Enter your text here!");
// let words = input.toLowerCase().split(' ');

// for (let i=0 ; i<words.length ; i++){
// words[i]=words[i][0].toUpperCase()+ words[i].slice(1)
// }

// let finalResult=words.join(' ');
// document.writeln(`${finalResult}`);




// let paragraph = "my name is salman"


// let arr = paragraph.split(" ")
// let capitalizeArr = []


// console.log(arr)

//  for(let i = 0; i < arr.length; i++){

//   let titleCaseWords = arr[i][0].toUpperCase() + arr[i].slice(1)
//   capitalizeArr.push(titleCaseWords)
  
// }
// console.log(capitalizeArr);

//  let joinReturn = capitalizeArr.join(" ")
// paragraph = joinReturn

// console.log(paragraph) 



// practice////////////////////////////


// let para=prompt("Enter your text here");
// let words=para.toLowerCase().split(' ');

// for (let i=0; i<words.length; i++){
//   words[i]= words[i][0].toUpperCase()+words[i].slice(1)
// }

// let finalResult=words.join(' ');
// document.writeln(`${finalResult}`)
// ____________________________________________________________________________

// 2. Write a program that converts the variable num to 
// string. 
// Remove the dot to display “3536” display in your browser.


// let num=35.36
// let str=num.toString();

// console.log(str,typeof(str));

// let result=str.replace(".","");

// console.log(result);

// ___________________________________________________________________________

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
// Note: 
// ASCII code of ! is 33 
// ASCII code of , is 44 
// ASCII code of . is 46 
// ASCII code of @ is 64
// solution 1 

// let userName = prompt("Enter Username");
// let isValid = true;

// for (let i=0; i<userName.length ; i++){
// let charCode = userName.charCodeAt(i);

// if (charCode===33 || charCode === 44 || charCode === 46 || charCode === 64 ){
// isValid = false;
// break;
// }
// }

// if (isValid){
//     alert("Username accepted!!")
// }else {
//     alert("Please enter a valid username (symbols like @ . , ! are not allowed.");
// }

// solution 2

let userName = prompt("Enter Username");
let specialSymbols = ["@", ".", ",", "!"]  // Hamari banned list
let hasSpecialChar = false;

for (let i=0 ; i< userName.length; i++){
   if(specialSymbols.includes(userName[i])){
    hasSpecialChar = true;
    break;
   }
}

if (hasSpecialChar){
    alert("Please enter a valid username without @, ., , or !")
}else{
    alert("Username saved: " + userName);
}