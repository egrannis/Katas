/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/
const isIsogram = (str) => {

  let newStr = str.toLowerCase();
  let testArr = [];

  for (let letter of newStr) {
    if (testArr.filter(item => item === letter).length >= 1) {
      return false;
    }
    testArr.push(letter);
  }
  return true;
};