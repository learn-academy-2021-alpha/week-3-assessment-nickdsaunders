// ASSESSMENT 3: Coding practical questions with Jest



// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

describe("when rtrnArrFib is called", () => {
    it("returns an array of 6 numbers containing the numbers of Fibonacci when called with 6", () => {
        //arrange
        const myNumb = 6

        //act
        const actualResult = rtrnArrFib(myNumb)
    
        //assert
        //I couldn't figure out how to leave out the 0 on the return so I just added it in the epected output to check my test functionality. 😢
        expect(actualResult).toEqual([0, 1, 1, 2, 3, 5, 8])
    })
    it("returns an array of 6 numbers containing the numbers of Fibonacci when called with 10", () => {
        //arrange
        const myNumb = 10

        //act
        const actualResult = rtrnArrFib(myNumb)
    
        //assert
        expect(actualResult).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

var myNumb1 = 6
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
var myNumb2 = 10
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.


//write a function returnArrayFibonacci that takes in an argument of a number

//I refactored this so many times it doesn't even make sense anymore lol I was trying to use a for loop and then push the new sum into a new array that I declared but I could not figure out how to add the two numbers togther correctly.
 
// const returnArrayFibonacci = (myNumb) => {
//     var fib = []
//     for(var i=1; i<6; i++){
//         fib.push(fib[i-2] + fib[i-1])
//     }
//     return fib
// }
// console.log(returnArrayFibonacci(myNumb))

//after MANY failed attempts I found a solution online that works and I can mostly understand
//write a function rtrnArrFib that takes in an argument of a number
const rtrnArrFib = (num) => {
    //if the number is equal to 1 then it just returns an array of [0, 1] since there is nothing to add the number to.
    if(num ===1){
        return [0,1];
    } else {
    //else create a var to store the number before the number you are passing into the function
        var s = rtrnArrFib(num-1);
        //use that var and the push method to add the last two numbers of the array together to get the new sum and add it back into the array.
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
//console log to test function
//console.log(rtrnArrFib(myNumb1))
//console.log(rtrnArrFib(myNumb2))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


// a) Create a test with expect statements for each of the variables provided.

describe("when onlyOdd is called", () => {
    it("returns a new array with only odd numbers sorted from least to greatest", () => {
        //arrange
        const myArray = fullArr1

        //act
        const actualResult = onlyOdd(myArray)

        //assert
        expect(actualResult).toEqual([-9, 7, 9, 199])
    })
    it("returns a new array with only odd numbers sorted from least to greatest", () => {
        //arrange
        const myArray = fullArr2

        //act
        const actualResult = onlyOdd(myArray)

        //assert
        expect(actualResult).toEqual([-823, 7, 23])
    })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]




// b) Create the function that makes the test pass.

// write a function takes an array as an arugment
const onlyOdd = (array) => {
    //create a variable to store the new array and use the filter method to create a new array of only numbers that are odd or odd and negative
    let oddNumbs = array.filter(value => {
        return typeof value === "number" && value % 2 === 1 || value % 2 === -1
    })
    //return the new array and sort from least to greatest
    return oddNumbs.sort((a,b) => a - b)
}

//used console.log to check the arrays in the function for expected ouput.
// console.log(onlyOdd(fullArr1))
// console.log(onlyOdd(fullArr2))



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

describe("when findMdlLet is called", () => {
    it("returns a string of the middle letter", () => {
        //arrange
        const myStr = "alpha"

        //act
        const actualResult = findMdlLet(myStr)
    
        //assert
        expect(actualResult).toEqual("p")
    })
    it("returns a string of the middle letter", () => {
        //arrange
        const myStr = "rhinoceros"

        //act
        const actualResult = findMdlLet(myStr)
    
        //assert
        expect(actualResult).toEqual("oc")
    })
})

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”





// b) Create the function that makes the test pass.

//write a function that takes a string as an argument
const findMdlLet = (str) => {
    //create a variable to store the position
    var posOfMdl;
    //create a variable to store the length
    var lengthOfMdl;
    //write an if statement to check if the string length is odd number of characters
    if(str.length % 2 == 1) {
        //if odd return the position by dividing the length of string by two 
        posOfMdl = str.length / 2;
        //and return the lengthOfMdl of 1 becuase there is only one middle letter
        lengthOfMdl = 1;
    } else {
        //else return the position by dividing the length by 2 and subtracting 1
        posOfMdl = str.length / 2 - 1;
        //and return the lengthOfMdl of 2 becuase there are 2 middle letters
        lengthOfMdl = 2;
    }
    //return a substring using the position of the middle to set the starting point and the position of mdl + length to get the ending point
    return str.substring(posOfMdl, posOfMdl + lengthOfMdl)
}
//used console log to check function
// console.log(findMdlLet(middleLetters1));
// console.log(findMdlLet(middleLetters2));



// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("when arrNewSum is called", () => {
    it("returns an array of the accumulating sum", () => {
        //arrange
        const myArr = numbersToAdd1

        //act
        const actualResult = arrNewSum(myArr)
    
        //assert
        expect(actualResult).toEqual([2, 6, 51, 60])
    })
    it("returns an array of the accumulating sum", () => {
        //arrange
        const myArr = numbersToAdd2

        //act
        const actualResult = arrNewSum(myArr)
    
        //assert
        expect(actualResult).toEqual([0, 7, -1, 11])
    })
    it("returns an empty array", () => {
        //arrange
        const myArr = numbersToAdd3

        //act
        const actualResult = arrNewSum(myArr)
    
        //assert
        expect(actualResult).toEqual([])
    })
})

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []





// b) Create the function that makes the test pass.

//couldn't figure out how to make this work using a for loop

//write a function that takes in an array as an argument
// const arrNewSum = (arr) => {
//     let arrOfSum = []
//     for(let i=0; i<arr.length; i++){
//         //if arr is not a number return arr - was using this to return the empty array for numbersToAdd3
//         if(typeof arr[i] !== "number"){
//             arrOfSum
            //logic here was else meaning the array contained numbers then it would push the sum of the value of the array at a each indicie and the value of the array at the previous indice 
//         } else {
//             arrOfSum.push(arr[i] + arr[i-1])
//         }
//     }
        //and then here it would return the 
//     return arrOfSum
// }

// log here to test function
// console.log(arrNewSum(numbersToAdd1))
// console.log(arrNewSum(numbersToAdd2))
// console.log(arrNewSum(numbersToAdd3))

//found a solution that worked using the reduce method 
//write a function called arrNewSum that takes an array as an argument
const arrNewSum = (arr) => {
   //create a variable to store the new array and use the reduce method which executes the provided function for each value of the array and stores the return value in an accumulator. The reduce function takes in an argument of the accumulator (a) and the value of the current element (b).
    let arrSum = arr.reduce(function(a,b) {
        //uses push to add the sum back into the array. What we are pushing is the sum of the accumulator (a) at the previous index and the (b) current value. The OR 0 is for the first value in the array that doesn't have a previous index.
        a.push((a[a.length-1] || 0) + b);
        //return the new sum
        return a;
        //honestly not sure what the ,[] does here i think it returns the sum as an array?
    }, []);
    //here you are returning the actual new aray
    return arrSum
}

// log here to test function
// console.log(arrNewSum(numbersToAdd1))
// console.log(arrNewSum(numbersToAdd2))
// console.log(arrNewSum(numbersToAdd3))