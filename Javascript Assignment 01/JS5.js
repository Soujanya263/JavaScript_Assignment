// 5_Write a JavaScript program to reverse a given string and also check if string is palindrome or not.


let string = prompt("Enter a string");   //Read input from user
string = string.toLowerCase();    //Convert all the characters to lower case
let NewStr = '';    //Empty string

for (let i = 0; i < string.length;i++){
    NewStr += string[string.length -1-i];   //Reverse the given string and store it in the new string
}
document.write("Reversed string of "+string+" : "+NewStr+"<br>");
if (string == NewStr){    //Test to check for palindrome
    document.write("It is a palindrome.");
}
else{
    document.write("It is not a palindrome.");
}