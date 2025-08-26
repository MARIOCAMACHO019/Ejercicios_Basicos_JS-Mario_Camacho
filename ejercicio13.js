function nameFinder(nameList, nameToFind) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameToFind) {
      return [true, i];
    }
  }
  return false;
}

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

console.log(nameFinder(names, 'Peter'));
console.log(nameFinder(names, 'Tony'));
console.log(nameFinder(names, 'Thor'));
console.log(nameFinder(names, 'Jessica'));