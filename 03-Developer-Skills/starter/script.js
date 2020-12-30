// Remember, we're gonna use strict mode in all scripts now!
/* 'use strict';

const meassureKelvin = function(){
    const meassurement = {
        type: 'temp',
        unit:'celsius',
        value: Number(prompt("Degrees celsius:"))
    };

    console.table(meassurement)
   // console.log(meassurement.value)
    // console.warn(meassurement.value)
    // console.error(meassurement.value)
    const kelvin = meassurement.value + 273;
    return kelvin;
}

// A) UDENTIFY


console.log(meassureKelvin())
 */


 //////////////////////////////////////
//// Coding challenge #1

/* Gvien an array of forecasted maximum temperatures,
the thermometer displays a string with thes temperatures.

Example: [17,21,23] will print "...17°C in 1 days,
... 21°C in 2 days ... 23°C in 3 days..."

Create a function 'printForecast' wich takes in an 
array 'arr' and logs a string like the above to the
conole.

Use the problem-solving framework: Understand the problem
and break it up into sub-problems!

TEST DATA 1: [17,21,23]
TEST DATA 2: [12,5,-5,0,4]
*/


//Problem-solving framework
// 1. functiont that can have acces to al number in array
// 2. Add formated text to that number 
// 3. print output



//function print forecast
function printForecast(arr){
    for(let i=0; i < arr.length; i++){
        console.log("..."+arr[i]+"°C in "+(i+1)+" days")
    }
}

//Test

let arr1 =[17,21,23]
let arr2 =[12,5,-5,0,4]

printForecast(arr1);
printForecast(arr2);

////////////////////////////////////////////////////////////
// Jhonas solution

// 1) Understandig the problem
//    - Array transformed to string, separated by ...
//    - what is the X days? Answer: index +1

// 2) Breaking up into sub-problems
//  - Transorm array into string
//  - Transform each element to string with °C
//  - String needs to contain day ( index +1)
//  - Add ... between elements and start and end of string

const printForecastUdemy = function(arr){
    let str=''
    for(let i=0; i< arr.length; i++){
        str = str+`${arr[i]}°C in ${i + 1} days ...`
    }
    console.log('...'+str)
}

printForecastUdemy(arr1)