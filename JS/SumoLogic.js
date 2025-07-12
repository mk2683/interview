import React, { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([{ text: inputValue, completed: false }, ...items]);
      setInputValue("");
    }
  };

  const toggleItemCompletion = (index) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div>
      <div>My TODO list</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>ADD</button>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
            onClick={() => toggleItemCompletion(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
  return <Todo />;
}

// Do not change
export default Todo;

/**
 * @param {string[]} words All the words known by your friends.
 * @param {string} message The message sent by your friends.
 * @return {string} The decoded message.
 */
function decode(words, message) {
  // Helper function to generate the signature of a word
  function getSignature(word) {
    if (word.length <= 2) return word;
    const middle = word.slice(1, -1).split("").sort().join("");
    return word[0] + middle + word[word.length - 1];
  }

  // Create a map from signatures to original words
  const wordMap = new Map();
  words.forEach((word) => {
    const signature = getSignature(word);
    wordMap.set(signature, word);
  });

  // Decode the message
  const decodedWords = message.split(" ").map((scrambledWord) => {
    const signature = getSignature(scrambledWord);
    return wordMap.get(signature);
  });

  return decodedWords.join(" ");
}

// Example usage
const words = ["ball", "funny", "hello", "message"];
const message = "hlleo tihs msseage is fnnuy";
console.log(decode(words, message)); // "hello this message is funny"

/**
 * @param {number[]} numbers An array of integers.
 * @param {number} value The value to search at even indexes.
 * @return {boolean} A boolean telling if the value was found at least one even index.
 */
function isOnEvenPosition(numbers, value) {
  for (let i = 0; i < numbers.length; i += 2) {
    if (numbers[i] === value) {
      return true;
    }
  }
  return false;
}

// Example usage
console.log(isOnEvenPosition([8, 7, 9, 6, 5, 45], 5)); // true
console.log(isOnEvenPosition([8, 7, 9, 6, 5, 45], 10)); // false

/**
 * @param {string[]} gridMap List of 10 strings (each having 15 characters) defining a 2D grid.
 * @return {string} The string made with the encountered letters, while following the path.
 */
function followPath(gridMap) {
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  let x = 0,
    y = 0; // starting position
  let pathString = "";

  while (true) {
    // Record the letter if it is a lowercase letter
    if (/[a-z]/.test(gridMap[x][y])) {
      pathString += gridMap[x][y];
    }

    // Mark the current position as visited by changing the character to something else
    gridMap[x] = gridMap[x].substring(0, y) + " " + gridMap[x].substring(y + 1);

    let foundNextStep = false;

    // Check all possible directions
    for (let [dx, dy] of directions) {
      let newX = x + dx;
      let newY = y + dy;

      if (
        newX >= 0 &&
        newX < 10 &&
        newY >= 0 &&
        newY < 15 &&
        (gridMap[newX][newY] === "*" || /[a-z]/.test(gridMap[newX][newY]))
      ) {
        x = newX;
        y = newY;
        foundNextStep = true;
        break;
      }
    }

    // If no valid next step is found, break the loop
    if (!foundNextStep) {
      break;
    }
  }

  return pathString;
}

// Example usage
const gridMap = [
  "***............",
  "**c*od**i*****.",
  "...*.........*.",
  "...*..*n.....*.",
  "...**m*a*g****.",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
];

console.log(followPath(gridMap)); // "codingame"
