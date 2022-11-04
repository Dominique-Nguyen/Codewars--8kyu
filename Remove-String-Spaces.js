// Simple, remove the spaces from the string, then return the resultant string.

// My solution

function noSpace(x){
    return x.split(" ").join("")
  }

  // Other solution

  function noSpace(x){return x.split(' ').join('')}

  //--------------------------------------------------------

  function noSpace(x){
    return x.replace(/\s/g, '');
  }