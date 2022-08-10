// add whatever parameters you deem necessary
function isSubsequence(stringOne, stringTwo) {
  if (stringOne.length > stringTwo.length) return false;
  let i = 0;
  for (let c of stringOne) {
    let found = false;
    for (let j = i; j <= stringTwo.length - 1; j++) {
      if (c === stringTwo[j]) {
        found = true;
        i++;
        j = stringTwo.length;
      }
    }
    if (!found) return false;
  }

  return true;
}
