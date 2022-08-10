// add whatever parameters you deem necessary
function twoArrayObject(theKeys, theValues) {
  let x = 0;
  let theObject = {};
  for (k of theKeys) {
    if (theValues[x]) {
      theObject[k] = theValues[x];
    } else {
      theObject[k] = null;
    }
    x++;
  }

  return theObject;
}
