'use strict';
module.exports = function someParser(){
  var text, options;
  if(arguments.length===2){
    text = arguments[0];
    options = arguments[1];
  } else {
    options = arguments[0];
    text = arguments[0].text
  }
  const counts = {};
  const textLength = text.length;
  for (let i=0; i<textLength; i+=1){
    if(!counts[text[i]]){
      counts[text[i]] = 1;
    } else {
      counts[text[i]] += 1;
    }
  }

  var uniqueCharactersFound = 0;
  for(var key in counts) {
    uniqueCharactersFound++;
  }

  return {
    args: arguments,
    counts: counts,
    uniqueCharactersFound: uniqueCharactersFound
  }

}
