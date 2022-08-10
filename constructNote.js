// add whatever parameters you deem necessary
function constructNote(message, letters) {
  let messageFrequencies = {};
  let lettersFrequencies = {};
  let theCount = 0;

  for (let c of message) {
    theCount = messageFrequencies[c] || 0;
    messageFrequencies[c] = theCount + 1;
  }

  theCount = 0;
  for (let c of letters) {
    theCount = lettersFrequencies[c] || 0;
    lettersFrequencies[c] = theCount + 1;
  }

  for (let c in messageFrequencies) {
    if (!lettersFrequencies[c]) {
      return false;
    }
    if (messageFrequencies[c] > lettersFrequencies[c]) {
      return false;
    }
  }

  return true;
}
