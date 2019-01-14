function breakOut(array, changeValue, stopValue){
    var newA = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      break;
    } array[i] = changeValue;
      newA.push(array[i]);
    } 
      return newA;
    }



function keepGoing(array, changeValue, skipValue){
  for (let i = 0; i < array.length; i++){
    if (array[i] !== skipValue){
      array[i] = changeValue
    }
  }
}

function findBy(array, findFn){
  for (let i = 0; i < array.length; i++){
    if (array[i] !== findFn()){
      continue
    }
  }
}
