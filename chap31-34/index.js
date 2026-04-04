// 1. Write a program that displays current date and time in
// your browser.

// let date=new Date();
// console.log(date);

// _____________________________________________________________________

// Write a program that alerts the current month in words.
// For example December.

// let months = [
//     "January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"
// ];

// let now=new Date();

// let monthIndex = now.getMonth();

// let monthName=months[monthIndex];
// alert("Current month is: " + monthName);

// _________________________________________________________________________

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// let now=new Date();

// let dayIndex = now.getDay();

// let dayName =days[dayIndex];

// console.log("Today is " + dayName);


// _________________________________________________________________________

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// let now =new Date();
// let day=now.getDay();

// if(day == 0 || day == 6){
// alert("Its a FUN day")
// } else{
//     alert("Its a working day")
// }

// _____________________________________________________________________________


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let now=new Date();

// let date=now.getDate();

// if(date < 16){
//     console.log("its first fifteen days of the month ");
    
// }else{
//     console.log("Last days of the month");
    
// }

// _________________________________________________________________________________


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// let now =new Date();

// let milisec = now.getTime();

// let minutes = milisec / 1000 /60;

// console.log(minutes);

// _________________________________________________________________________________

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let now =new Date();

// let hours =now.getHours();

// if(hours < 12){
// alert("It's AM");
// } else {
//     alert("It's PM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate
