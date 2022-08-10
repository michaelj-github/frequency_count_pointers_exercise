// add whatever parameters you deem necessary
function averagePair(anArray, theTarget) {
  let left = 0;
  let right = anArray.length - 1;

  while (left < right) {
    let theAverage = (anArray[left] + anArray[right]) / 2;

    if (theAverage === theTarget) {
      return true;
    } else if (theAverage > theTarget) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
