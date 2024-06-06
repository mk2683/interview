import React, { useState } from "react";
import "./styles.css";

const searchMainData = [
  {
    eid: 1,
    ename: "Mohit",
  },
  {
    eid: 2,
    ename: "Aniket",
  },
  {
    eid: 3,
    ename: "ram",
  },
  {
    eid: 4,
    ename: "Sahni",
  },
  {
    eid: 5,
    ename: "Ankish",
  },
];

export default function App() {
  const [data, setData] = useState([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [suggestion, setSuggestion] = useState([]);

  function handleSearch(event) {
    let searchdata = event.target.value;
    //console.log(searchdata);
    let suggestionString = [];
    searchMainData.forEach(data => {
      if (data.includes(searchdata)) {
        suggestionString.push(data);
      }
      setSuggestion(suggestionString);
    });
  }

  function newTabLayout(tabIndex) {
    return (
      <div className="new-tab">
        <input
          type="text"
          className="search"
          onKeyUp={handleSearch}
          placeholder="search your text"
          name={tabIndex}
        />
      </div>
    );
  }

  function createTab() {
    //console.log("createTab");
    let newTab = newTabLayout(currentTabIndex);
    let tabData = data;
    tabData.push(newTab);
    //console.log(tabData);
    setCurrentTabIndex(currentTabIndex + 1);
    setData(tabData);
  }

  console.log(data);

  return (
    <div className="App">
      <button onClick={() => createTab()}>Add new tab</button>
      {data.map((tab) => tab)}
      {suggestion.map((string) => <li>string</li> }
    </div>
  );
}
