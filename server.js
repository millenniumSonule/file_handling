
const add = (num1,num2,callback) => {
    let result = num1 + num2;
    console.log(result)
    callback();
}

add(2,3, ()=>{
    console.log("Callback function executed");
})