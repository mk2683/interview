function deepCopy(obj) {
  // Return primitives as-is
  if (Object(obj) !== obj || obj instanceof Function) return obj;

  // Handling Date
  if (obj instanceof Date) return new Date(obj);

  // Handling RegExp
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

  // Handling Array
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  // Handling Object
  const copy = {};
  console.log("copy", copy);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

// Example usage:
const original = {
  name: "John",
  age: 30,
  date: new Date(),
  nested: {
    hobbies: ["reading", "gaming"],
    details: {
      active: true,
    },
  },
  sayHello: function () {
    console.log("Hello");
  },
};

const copied = deepCopy(original);
console.log(copied);
