// add whatever parameters you deem necessary
function countPairs(theArray, theNumber) {
  let theCount = 0;
  let x = 0;
  for (let n of theArray) {
    for (let m = x + 1; m <= theArray.length - 1; m++) {
      if (theArray[m] + n === theNumber) {
        theCount++;
      }
    }
    x++;
  }
  return theCount;
}
