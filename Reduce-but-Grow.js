// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My solution

function grow(x){
    let product = x[0]
    for(let i = 1; i < x.length; i++){
      product = x[i] * product
    }
    return product
  }

   // Other solution

   const grow=x=> x.reduce((a,b) => a*b);
