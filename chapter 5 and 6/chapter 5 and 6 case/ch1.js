try {
var num = window.prompt("How many comics books do you buy every time you visit a comic book store?");
var num2 = window.prompt("How many times a month do you visit a comic book store?");
var ans = num + num2
document.write( "You buy " + ans + " comic books a month.");
}
catch (e) {
    alert("something has gone wrong");
} finally {
    console.log(20);
}

/*
For my summary for chapter 4 individual case i have used the Try and Catch for my errors.
The try will run my JavaScript code with the question i asked and also run the varables i have setup for 
the used to answer. With the help of the Catch it will show an alert message if there is a error.
 */