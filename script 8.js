let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
  ]);
  for (const [key, value] of fruits) {
    console.log(`${key} = ${value}`);
  }