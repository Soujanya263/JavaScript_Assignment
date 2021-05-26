// 9_Write a JavaScript function to find the unique elements from two arrays.
// Test Data :
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output:
//     ["1", "2", "3", "10", "100"]

//Function definition
function difference(array1,array2){
    
    a = [];    //Empty array
    for (let i = 0;i < array1.length;i++){      //Loop to concatenate all the elements of 1st string to array 'a'
        a = a.concat(array1[i]);
    }

    for (let i = 0;i < array2.length;i++){      //Loop to concatenate all the elements of 2nd string to array 'a'
        a = a.concat(array2[i]);
    }

    for (let j = 0; j<a.length;j++){        //Loop to sort array 'a' in ascending order
        for(let i=0; i<a.length-1;i++){      
            if (Number(a[i]) > Number(a[i+1])){
                let temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
            }
        }
    }
    
    for (let i=0; i < a.length; i++){       //Loop to remove duplicates
        if (Number(a[i]) == Number(a[i+1])){
            for (let j=i; j<a.length-1; j++){
                let temp = a[j];
                a[j] = a[j+1];
            a[j+1] = temp;
            }
            a.pop()
        }
    }
    return a;
}

let array1 = prompt("Enter the elements of 1st array");   //Read input from user
let array2 = prompt("Enter the elements of 2nd array");   //Read input from user

array1 = array1.replace(array1[0],'');    //Remove '[' from 1st string
array1 = array1.replace(array1[array1.length-1],'');    //Remove ']' from 1st string
array1 = array1.split(',');    //Split the string with ',' as the separator
array2 = array2.replace(array2[0],'');    //Remove '[' from 2nd string
array2 = array2.replace(array2[array2.length-1],'');    //Remove ']' from 2nd string
array2 = array2.split(',')    //Split the string with ',' as separator

console.log(difference(array1,array2));    //Function call
