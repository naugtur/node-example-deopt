function iCanAdd(a, b){
  return a + b;
}

var i=0;

while(i < 1000) {
  iCanAdd(1, 1)
  i++
}

console.log('Changing argument types')

iCanAdd('a',1)
