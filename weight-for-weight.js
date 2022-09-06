function orderWeight(strng) {

  let weightArr = strng.trim().split(" ");
  weightArr = weightArr.filter(num => num.length > 0); // take out the empty " " in the array
  let newObj = {};

  // split each item in the array
  // reduce method on that specific split? 
  // save rhat sum value and set it as the key 

  for (let i = 0; i < weightArr.length; i++) {
    let indivNum = weightArr[i].split("");
    //     console.log(indivNum); // good

    let indivSum = indivNum.reduce((prev, curr) => Number(prev) + Number(curr)); // number type rather than string
    console.log(indivSum);
    newObj[indivSum] = weightArr[i];
    // reduce method on that specific split? 
    // save rhat sum value and set it as the key 
  }
  console.log(newObj);
}
  // make object
  // keys are sum
  // values are array value