// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution 

function findAverage(array) {
    let sum = 0
    if(array.length != 0){
      for(let i = 0; i <= array.length - 1; i++){
        sum = sum + array[i]
      }
      let avg = sum / array.length
      return avg
    } else {
     return 0 
    }
  }

  // Other solution

  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }