function arrayChunk(arrayInput = [], chunkSize = 0) {
  let chunkedArray = [];

  //iterate the array elements
  for (let arrayElement of arrayInput) {
    let lastElementOfChunkedArr = chunkedArray[chunkedArray.length - 1];

    if (
      !lastElementOfChunkedArr ||
      lastElementOfChunkedArr.length === chunkSize
    ) {
      chunkedArray.push([arrayElement]);
    } else {
      lastElementOfChunkedArr.push(arrayElement);
    }
  }
  //Return the chunked array
  return chunkedArray;
}

function arrayChunk2(arrayInput = [], chunkSize = 0) {
  const chunkedArr = [];
  let index = 0;
  while (index < arrayInput.length) {
    let slicedArr = arrayInput.slice(index, index + chunkSize);
    chunkedArr.push(slicedArr);
    index += chunkSize;
  }
  console.log(chunkedArr);
  return chunkedArr;
}

arrayChunk2([10, 1, 5, 68, 9, 7, 4, 1, 2, 3, 7, 8, 9, 5], 2);
