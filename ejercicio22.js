const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;
const usedFruits = new Set();

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    while (fruitIndex < fruits.length && usedFruits.has(fruits[fruitIndex])) {
      fruitIndex++;
    }
    if (fruitIndex < fruits.length) {
      foodSchedule[i].name = fruits[fruitIndex];
      foodSchedule[i].isVegan = true;
      usedFruits.add(fruits[fruitIndex]);
      fruitIndex++;
    } else {
      console.log("No hay suficientes frutas únicas para reemplazar todas las comidas no veganas.");
      break;
    }
  }
}

console.log(foodSchedule);