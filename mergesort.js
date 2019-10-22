function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    let firstHalf = []
    let secondHalf = []
    let firstHalfLength= Math.floor(wholeArray.length/2) 
    let secondHalfLength = wholeArray.length - firstHalfLength

    for ( let i = 0; i < firstHalfLength; i++){
        firstHalf.push(wholeArray[i])
    }
    for (let i = firstHalfLength; i < wholeArray.length; i++){
        secondHalf.push(wholeArray[i])
    }


    return [firstHalf, secondHalf];
  }

  function merge(first, second){
      //our code here
      let newArr = []
      while (first[0] && second[0]){
      if (first[0] < second[0]){
          newArr.push(first[0])
          first.shift()
      } else{
          newArr.push(second[0])
          second.shift()
      }
    }
    first.forEach(elm => {newArr.push(elm)})
    second.forEach(elm => {newArr.push(elm)})
      return newArr
  }