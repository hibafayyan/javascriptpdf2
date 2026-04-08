// 1. Write a function that displays current date & time in your
// browser
// function displayDateTime() {
//   let now = new Date();
//   return now;
// }
//   console.log(displayDateTime());


function displayDateTime(){
  let time=new Date();
  let read=time.toLocaleString();
  document.getElementById("output").innerHTML=read
setInterval(displayDateTime,1000);

}

// ___________________________________________________

// 2. Write a function that takes first & last name and then it
// greets the user using his full name


// method 1

// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");

// function greet(firstName,lastName){
//    let message=(`Hello ${firstName}  ${lastName}`)
//   return message
// }


// alert(greet())





// function handleGreeting(){
//  let first=document.getElementById(fName).value
//   let last=document.getElementById(lName).value

// }

// function greet(){
//   return "hello";
// }

// alert(greet())


// let userName=prompt("enter name")
// function message(name){
//  return "Hello " + name 

// }

// alert ( message (userName));

// // Task 3

// let solve1 =+ prompt("enter first no");
// let solve2 = +prompt("enter last no");

// function num (a,b){
//   return a+b
// }
// alert (num(solve1,solve2  ));

// let number = Number(prompt("Enter a number"));
// function check(num){
//   if (num % 2 == 0){
//         return "Even";
//   } else {
//     return "Odd";
//   }
//   }

//   alert(check(number))me=()


// let fName=prompt("enter first name");
// let LName=prompt("enter last name ");

// function userNamename(firt,last){
// return firt + " " + last

// }

// alert(userNamename(fName, LName))


// 2. Write a function that takes first & last name and then it
// greets the user using his full name

// let fName=prompt("enter first name");
//  let LName=prompt("enter last name ");

//  function greet(first,last){
// return " Hello " + first + " " + last 

//  }

//  alert(greet(fName,LName));

//  ____________________________________________________

//  3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// let num1=Number(prompt("enter first number"));
// let num2=Number(prompt("enter 2nd no"));

// function cal(a,b){
//   return a+b
// }

// alert(cal(num1,num2))

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let operator = prompt("Enter operator (+, -, *, /)");

// function calculator(n1,n2,op){
//   if(op == "+"){
//    return n1+n2
//   }else if(op == "-"){
//    return n1-n2
//   }else if(op == "*"){
//    return n1*n2
//   }else if(op == "/"){
//    return n1/n2
//   }else {
//     return "enter valid operator"
//   }
// }
// alert(calculator(num1,num2,operator ))

// 5. Write a function that squares its argument.

// let num=Number(prompt("enter no"));


// function square(number){
// return number * number
// }

// alert(square(num));


// ______________________________________________

// 6. Write a function that computes factorial of a number.

// let number = Number(prompt("Enter a number to find factorial"));


// function factorial (n){
// let result=1;
// for(let i=1; i <=n ; i++){
// result *=i
// }
// return result
// }

// alert(factorial(number))

// 7. Write a function that take start and end number as inputs
// & display counting in your browser

let start = Number(prompt("Enter start number"));
let end = Number(prompt("Enter end number"));

function displayCounting (s,e){
  result=" "
 
  for (let i=s ; i<=e ; i++ ){
  result +=i + " "
}
 return result

}

alert(displayCounting(start,end))
