// add whatever parameters you deem necessary
function sameFrequency(numberOne, numberTwo) {
  const arrayOne = Array.from(String(numberOne), Number);
  const arrayTwo = Array.from(String(numberTwo), Number);

  if (arrayOne.length !== arrayTwo.length) return false;

  let arrayOneFrequencies = {};
  let arrayTwoFrequencies = {};
  let theCount = 0;

  for (let n of arrayOne) {
    theCount = arrayOneFrequencies[n] || 0;
    arrayOneFrequencies[n] = theCount + 1;
  }

  for (let n of arrayTwo) {
    theCount = arrayTwoFrequencies[n] || 0;
    arrayTwoFrequencies[n] = theCount + 1;
  }

  for (let n of arrayOne) {
    if (arrayOneFrequencies[n] !== arrayTwoFrequencies[n]) return false;
  }

  return true;
}
