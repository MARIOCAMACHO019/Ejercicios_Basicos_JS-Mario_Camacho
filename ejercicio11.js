function averageWord(list) {
  let totalSum = 0;
  let elementCount = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      totalSum += list[i];
    } else if (typeof list[i] === 'string') {
      totalSum += list[i].length;
    }
    elementCount++;
  }

  return totalSum / elementCount;
}

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
console.log(averageWord(mixedElements));