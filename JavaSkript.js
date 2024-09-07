const MyObject = {name: "John", Age: 30, City: "New York"};

// Используем цикл for...in для перебора свойств объекта
for (let key in MyObject) {
    console.log(`${key}: ${MyObject[key]}`);
}