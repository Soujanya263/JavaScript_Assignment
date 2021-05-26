// 3_Write a JavaScript program function to convert temperatures from Celsius, Fahrenheit and Fahrenheit to Celsius as per user arguments provide in functions.

//Function definition
function convert(convertTo,temperature){

    if (convertTo.toLowerCase() == 'f'){    //Test to convert from celcius to fahrenheit
        let fahrenheit = (Number(temperature)*9/5) + 32;    //Formula to convert from celcius to fahrenheit
        document.write("Fahrenheit value of "+temperature+" degree celcius is "+fahrenheit.toFixed(2)+" degree fahrenheit");
    }
    else if (convertTo.toLowerCase() == 'c'){   //Test to convert from fahrenheit to celcius
        let celcius = (Number(temperature) - 32) * 5/9;    //Formula to convert from fahrenheit to celcius
        document.write("Celcius value of "+temperature+" degree fahrenheit is "+celcius.toFixed(2)+" degree celcius");
    }
    else{
        alert("Invalid input entered");    //For invalid inputs entered
    }
}

let convertTo = prompt("Enter 'f' to convert celcius to fahrenheit and 'c' to convert fahrenheit to celcius")   //Read input from user
let temperature = prompt("Enter the temperature value");   //Read input from user
convert(convertTo,Number(temperature)); //Function call