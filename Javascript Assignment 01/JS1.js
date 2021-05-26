// 1_Write a Javascript program to take three numbers from the user as input and print the largest number on the document.

let num1 = prompt("Enter a number1");   //Read input from user
let num2 = prompt("Enter a number2");   //Read input from user
let num3 = prompt("Enter a number3");   //Read input from user

// Test for largest number among the above 3
if (num1 > num2 && num1 > num3){
    alert("Largest number: "+num1);
}
else if(num2 > num1 && num2 > num3){
    alert("Largest number: "+num2);
}
else{
    alert("Largest number: "+num3);
}