// console.log("hi");

const input = document.getElementById("input");
const container = document.getElementById("container");
const data = {
  macbook: "https://picsum.photos/id/48/5000/3333",
  ocean: "https://picsum.photos/id/14/367/267",
  mountains: "https://picsum.photos/id/29/4000/2670",
  book: "https://picsum.photos/id/24/4855/1803",
  traffic: "https://picsum.photos/id/88/1280/1707",
  dog: "https://picsum.photos/id/237/3500/2095",
};

const search = (e) => {
  const { value } = e.target;
  console.log("value=", value);
  if (data[value]) {
    console.log("found match");
    const img = document.createElement("img");
    img.setAttribute("src", data[value]);
    container.appendChild(img);
  }
};

const debounce = (fn, wait) => {
  console.log("debounce called");
  let timerid;
  return function (...args) {
    const context = this;
    clearTimeout(timerid);
    timerid = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
};

const debouncedSearch = debounce(search, 100);
debouncedSearch(e);

input.addEventListener("input", (e) => {
  debouncedSearch(e);
});
