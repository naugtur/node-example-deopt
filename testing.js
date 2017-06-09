'use strict';
var optimiser = require('check-v8-optimised');



function testOptimization(func){
  console.log(func.name, optimiser(func, [1, 1]));
}

function* someGenerator(){
  for (var i = 0; i < 10; i++) yield i
}

const examples = {
  simple(a, b){
    return a + b;
  },
  trycatch(a, b){
    try{
      return a + b;
    } catch (e) {
      e;
    }
  },
  usinggenerators(){
    for (var n of someGenerator()){
      //nothing relevant
    };
  },
  usingargs(){
    return arguments[0] + arguments[1];
  },
  usingargs2(){
    return Array.from(arguments).reduce((a,b)=>a+b)
  },
  argshacks(){
    if(!arguments[1]){
      arguments[1] = 0
    }
  },
  weirdflow(a, b){
    while(true){
      a=a-0.00001
      if(Math.random()>a) {
        break;
      }
    }
  },
  arraylength(){
    var check = x=>Math.random();
    var a=[1,2,3]
    for(var i=0;i<a.length;i++) {
      if(check(a[i])>0.9) {
        a.push('foo');
      }
    }
  },
  evil(a, b){
    return eval('a+b')
  },
  unsupportedSyntax(){
    if(false){
      debugger;
    }
  },
  prototype(){
    return {__proto__: 3};
  },
  letcompound(){
    let x=1;
    x+=1;
  },
  hashTableIteration() {
    var hashTable = {"-": 3};
    for(var key in hashTable);
  }
}

console.log('Check how results differ between node versions')
Object.keys(examples).map(name => testOptimization(examples[name]))
