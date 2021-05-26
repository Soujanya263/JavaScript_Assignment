// 2_Write a JS function and ask for user DOB ex: 10/June/1998 and if user age is between 18 to 44 then this link should be open automatically in browser “https://selfregistration.cowin.gov.in”.

//Function
function eligible(DOB){
    DOB = DOB.split('/');   //Split to array
    let date = new Date();  //Date object
    let age = date.getFullYear() - DOB[2];  //Calculate the age of the user
    if (age > 17 && age < 45){  //Test age limit in range(18,40)
        window.open("https://selfregistration.cowin.gov.in");
    }else{alert("Thank You..!")}
}

let DOB = prompt("Enter your DOB.. DD/MM/YYYY");   //Read input from user
eligible(DOB);  //Function call