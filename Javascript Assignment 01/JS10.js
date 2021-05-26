// 10_Write a JS function to find out the number of vowels from a user input string.
// Test Data:
//     console.log(vowels(“Hey This is Skillsanta JS Training”))
// Output:
//     A: 3
//     E: 1
//     I: 5

//Function definition
function vowel(string){
    a = 0; e = 0; i = 0; o = 0; u = 0;      //Counter variables
    for (let j = 0; j < string.length; j++){
        // Check for vowels and increment specific vowel when found
        if (string[j] == 'a'){      
            a++;
        }else if (string[j] == 'e'){
            e++;
        }else if (string[j] == 'i'){
            i++;
        }else if (string[j] == 'o'){
            o++;
        }else if (string[j] == 'u'){
            u++;
        }
    }
    document.write("a = "+a+"<br>"); 
    document.write("e = "+e+"<br>"); 
    document.write("i = "+i+"<br>");
    document.write("o = "+o+"<br>");
    document.write("u = "+u+"<br>");
 }
 
let string = prompt("Enter a string");   //Read input from user
vowel(string);      //Function call