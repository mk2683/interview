import React, { useState, useCallback } from "react";

const data = ["abc", "abdf", "afgd"];
// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = (query) => {
    filteredData = data.filter((value) => value.startsWith(query));
    setResults(filteredData);
  };

  // Debounced search function
  const debouncedSearch = useCallback(debounce(search, 300), []);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
