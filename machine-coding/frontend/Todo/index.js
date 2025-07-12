document.addEventListener("DOMContentLoaded", (event) => {
  const input = document.getElementById("inputField");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("list");

  list.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName == "SPAN") {
      const li = event.target.parentNode;
      li.style.display = "none";
    }
  });

  const createCloseBtn = () => {
    const span = document.createElement("SPAN");
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    return span;
  };

  const createListItem = (text) => {
    const li = document.createElement("LI");
    li.appendChild(document.createTextNode(text));
    li.appendChild(createCloseBtn());
    return li;
  };

  addBtn.addEventListener("click", (event) => {
    const inputValue = input.value.trim();

    if (inputValue) {
      const newList = createListItem(inputValue);
      newList.className = "items";
      list.appendChild(newList);
    } else {
      alert("Please type something befor submitting");
    }
    input.value = "";
  });
});
