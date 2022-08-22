
function spinningRings(innerMax, outerMax) {
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

// function spinningRings(innerMax, outerMax) {
//   var inner = 0, outer = 0, step = 0;
//   do {
//     step++; inner--; outer++;
//     if (inner < 0) inner = innerMax;
//     if (outer > outerMax) outer = 0;
//   }
//   while (inner != outer);
//   return step;
// };
