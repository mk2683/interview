// Function to convert Input to Output format
function convertToOutput(input) {
  const output = [];

  // Helper function to recursively build the nested structure
  function buildNestedStructure(parents, disposition) {
    if (parents.length === 0) return null;

    const parent = parents.shift();
    const node = {
      parent,
      disposition: parents.length === 0 ? disposition : null,
      children: buildNestedStructure(parents, disposition),
    };

    return node;
  }

  // Process each item in the input
  input.forEach((item) => {
    const { list, disposition } = item;
    const parents = [...list]; // Copy list of levels

    const root = { parent: parents.shift(), disposition: null };
    root.children = buildNestedStructure(parents, disposition);

    output.push(root);
  });

  return output;
}

const Input = [
  {
    list: ["level1", "level2", "level3"],
    disposition: 200,
  },
  {
    list: ["level1", "level3"],
    disposition: 400,
  },
  {
    list: ["level4", "level5"],
    disposition: 900,
  },
  {
    list: ["level1", "level4", "level5"],
    disposition: 700,
  },
];

// Convert Input to Output
const Output = convertToOutput(Input);
console.log(Output);

// const Output = [
//   {
//     parent: "level1",
//     disposition: null,
//     children: {
//       parent: "level2",
//       disposition: null,
//       children: {
//         parent: "level3",
//         disposition: 200,
//         children: null,
//       },
//     },
//   },
//   {
//     parent: "level1",
//     disposition: null,
//     children: {
//       parent: "level3",
//       disposition: 400,
//       children: null,
//     },
//   },
//   {
//     parent: "level4",
//     disposition: null,
//     children: {
//       parent: "level5",
//       disposition: 900,
//       children: null,
//     },
//   },
//   {
//     parent: "level1",
//     disposition: null,
//     children: {
//       parent: "level4",
//       disposition: null,
//       children: {
//         parent: "level5",
//         disposition: 700,
//         children: null,
//       },
//     },
//   },
// ];
