// add whatever parameters you deem necessary
function separatePositive(theArray) {
  let y = 0;
  for (let x = 0; x < theArray.length - 1; x++) {
    if (theArray[y] < 0) {
      theArray.push(theArray.splice(y, 1)[0]);
    } else {
      y++;
    }
  }

  return theArray;
}
