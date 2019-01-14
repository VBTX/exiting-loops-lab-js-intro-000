function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length; i++){
    if (array[i] !== stopValue){
      array[i] = changeValue;
    } else{
      break
    }
  }
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
