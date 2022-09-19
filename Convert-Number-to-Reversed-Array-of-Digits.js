// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My solution

function digitize(n) {
    let myArr = String(n).split("").map((n) => {
      return Number(n)
    })
    return myArr.reverse()
  }

// Other solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }