
/* Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin) and the outer
ring spins counter clockwise (increasing by 1 each spin). We start with both rings aligned on 0 at the top, and on
each move we spin each ring one increment. How many moves will it take before both rings show the same number
at the top again? */

// The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are integers >= 1.;
// https://www.codewars.com/kata/59afff65f1c8274f270020f5 

// Initial solution
const spinningRings = (innerMax, outerMax) => {
  let count = 0;
  let inner = 0;
  let outer = 0;
  do {
    if (inner === 0) {
      inner = innerMax;
    } else {
      inner--;
    }
    if (outer === outerMax) {
      outer = 0;
    } else {
      outer++;
    }
    count++;

  } while (inner !== outer);

  return (count);

};

// Refactored solution
const spinningRingsRefactored = (innerMax, outerMax) => {
  let [inner, outer, step] = [0, 0, 0];
  do {
    step++;
    inner--;
    outer++;
    if (inner < 0) {
      inner = innerMax;
    }
    if (outer > outerMax) {
      outer = 0;
    }
  }
  while (inner !== outer);
  return step;
};
