// 6_Write a JavaScript program to pass a 
// 'JavaScript function' as parameter.

function mainCode(){
    return "Welcome";
}
function auxCode(name,work){
    msg = work();
    // console.log("Did it..!");
    console.log(`${msg} ${name}`)
}

auxCode('Hari',mainCode);