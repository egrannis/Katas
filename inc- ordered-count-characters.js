

const orderedCount = function(text) {
  let letterArr = text.split('');
  let objHold = {};
  let count = 0;

  // loop through the letterArr
  // if obj key exists then we want to key's value
  // if not we want to set key's value to 1

  for (let letter of letterArr) {
    objHold[letter] ? objHold[letter] += 1 : objHold[letter] = 1;
  }
  return objHold;
  console.log(objHold);
};