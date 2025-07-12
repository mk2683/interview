console.log("hi");
// Sample data
const sentences = [
  { sentence: "Good things come and go", weight: 30 },
  { sentence: "Alice loves Bob's things", weight: 40 },
];

const startsWithQuery = (word, query) =>
  word.toLowerCase().startsWith(query.toLowerCase());

function searchSentences(query, data) {
  const filteredSentences = data.filter((item) => {
    const words = item.sentence.split(" ");
    return words.some((word) => startsWithQuery(word, query));
  });

  const sortedSentences = filteredSentences.sort((a, b) => b.weight - a.weight);

  return sortedSentences.map((item) => item.sentence);
}

// Example usage
const query = "thi";
const results = searchSentences(query, sentences);

console.log("Search results:", results);
