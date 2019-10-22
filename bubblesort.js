const compareElements = (element1, element2) => element1 > element2;

function swapElements(array, j, element1, element2) {
  //swap elements
  let temp = element1;
  array[j] = element2;
  array[j + 1] = temp;
}

function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let element1 = array[j];
      let element2 = array[j + 1];
      if (compareElements(element1, element2)) {
        swapElements(array, j, element1, element2);
      }
    }
  }
  return array;
}
