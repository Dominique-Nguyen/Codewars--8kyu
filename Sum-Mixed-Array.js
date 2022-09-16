// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My solution

function sumMix(x){
    const numArr = x.map(str => {
      return Number(str)
    })
    let sum = 0
    for(let i = 0; i < numArr.length; i++){
      sum = numArr[i] + sum
    }
    return sum
  }

  // Other solution

  const sumMix=x=>x.reduce((a,b)=>+b+a,0)