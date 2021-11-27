const numbers = [17, 19, 23, 9, 13, 12, 7, 20]
const gas = [40, 10, 90, 20]
const food = [10, 30, 100, 50, 70]

//1.arrow function 
const calculateAll = arr =>{
    let result=0 //we need variable for final sum up
    for(let i=0; i<arr.length; i++){
    //loop above works as follows
    //it creates i variable with zero value in order to use it as an index for our array
    //i will be increamented untill it reaches the end of array, length is useful in this case 
    //we could've used one exact number but if we make some changes in our array the size of it will be different so it won't work
    
        result+=arr[i]//result=result+arr[i]
     //see the i above it plays as an index as i told before
    }
    //console.log(arr[i]) here we have the sum of array
    document.getElementById('result').innerHTML="The sum of array is: " + result
}
calculateAll(food)

/*
2. function expression //we can't invoke function expression before we declare it
const calculateAll = function calculateAll(arr)=>{
    //some code here
}
calculateAll(numbers)

3. simple function declaration
function calculateAll(arr){
    //some code here
}
calculateAll(gas)

*/
