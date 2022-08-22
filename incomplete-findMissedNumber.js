function findNumber(start, stop, string) {
  let controlArr = [];
  let controlStr;
  let givenArr = [];
  let returnArr = [];


  for (let i = start; i <= stop; i++) {
    controlArr.push(i);

  }
  controlStr = controlArr.join("");
  controlArr = controlStr.split('').sort();
  givenArr = string.split('').sort();
  givenArr = givenArr.map(Number);
  controlArr = controlArr.map(Number);


  for (let j = 0; j < controlArr.length; j++) {
    if (controlArr[j] !== givenArr[j]) {
      returnArr.push(controlArr[j]);
      givenArr.splice(0, 0, 'A');
    }
  }

  if (returnArr.length < 1) {
    return returnArr;
  }

  controlStr = returnArr.join('');

  if (controlStr.length > 1) {
    returnArr = [];
    returnArr.push(controlStr);
    controlStr = controlStr.split('').reverse().join('');
    returnArr.push(controlStr);
  }

  for (e in reutrnArr) {
    if (e.charAt(0) == 0) {
      console.log(returnArr);
      //     returnArr = returnArr.slice(2)
    }
  }

  if (returnArr[0].substr(0, 1) == 0) {
    returnArr = returnArr.slice(1);
  }

  returnArr = returnArr.map(Number);
  return returnArr;
}