/*
https://www.codewars.com/kata/60cc93db4ab0ae0026761232/train/javascript
Task
A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T */



const arrange = (s) => {
  let holdArr = [...s];
  let resultArr = [];

  return recursion(holdArr, resultArr);

};


const recursion = (holdArr, resultArr) => {
  if (holdArr.length > 0) {
    resultArr.push(holdArr[0]);
    holdArr.splice(0, 1);

    if (holdArr.length >= 1) {
      resultArr.push(holdArr[holdArr.length - 1]);
      holdArr.splice((holdArr.length - 1), 1);


      if (holdArr.length > 0) {
        holdArr.reverse();
        recursion(holdArr, resultArr);
      }
    }
  }

  return resultArr;
};