'use strict';
//
// Try it for yourself first :)
//



//
//
//      ####   #####    ####      #    #       ######  #####    ####
//     #       #    #  #    #     #    #       #       #    #  #
//      ####   #    #  #    #     #    #       #####   #    #   ####
//          #  #####   #    #     #    #       #       #####        #
//     #    #  #       #    #     #    #       #       #   #   #    #
//      ####   #        ####      #    ######  ######  #    #   ####
//
//                                              ###
//       ##    #    #  ######    ##    #####    ###
//      #  #   #    #  #        #  #   #    #   ###
//     #    #  ######  #####   #    #  #    #    #
//     ######  #    #  #       ######  #    #
//     #    #  #    #  #       #    #  #    #   ###
//     #    #  #    #  ######  #    #  #####    ###
//







const HEY_LOOK_HERE = `

Don't give up just yet!

If you're looking all over and you're having trouble finding the code that breaks optimization,
here's a list of issues:
- reading arguments.length
- messing with arguments in general
- returning a reference to arguments
- let compound assignment
- iteratin over a hashmap with for in

`;











// Ok, there you go


module.exports = function someParser(textOrOptions, optionsOrNothing){
  var text, options;
  if(optionsOrNothing){
    text = textOrOptions;
    options = optionsOrNothing;
  } else {
    options = textOrOptions;
    text = textOrOptions.text;
  }
  const counts = {};
  const textLength = text.length;
  for (let i=0; i<textLength; i++){
    if(!counts[text[i]]){
      counts[text[i]] = 1;
    } else {
      counts[text[i]] += 1;
    }
  }

  var uniqueCharactersFound = Object.keys(counts).length

  return {
    args: [textOrOptions, optionsOrNothing],
    counts: counts,
    uniqueCharactersFound: uniqueCharactersFound
  }

}
