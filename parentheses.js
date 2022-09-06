function validParentheses(parens) {
  let left = 0;
  let right = 0;
  let parensArr = parens.split('');
  console.log(parensArr);

  if (parens.length === 0 || parens.length > 99) {
    return true;
  }

  if (parensArr[0] === ')' || parensArr[parensArr.length - 1] === '(') {
    return false;
  }

  for (let paren of parensArr) {
    if (paren === ')') {
      right++;
    }
    if (paren === '(') {
      left++;
    }
  }

  if (right === left) {
    return true;
  }
  return false;
}