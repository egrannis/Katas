/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const findShort = (s) => {
  let holdArr = s.split(' ');
  let min = Infinity;

  for (let i = 0; i < holdArr.length; i++) {
    if (holdArr[i].length < min) {
      min = holdArr[i].length;
    }
  }
  return min;
};