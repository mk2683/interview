const fs = require("fs");
const path = require("path");

function matchWildcard(pattern, filePath) {
  pattern = pattern.replace(/%/g, "*");
  return new RegExp(fnmatch.translate(pattern)).test(filePath);
}

function findMatchingPaths(baseDir, pattern) {
  let matchingPaths = [];

  function traverseDirectory(currentDir) {
    fs.readdirSync(currentDir).forEach((file) => {
      const filePath = path.join(currentDir, file);
      if (matchWildcard(pattern, filePath)) {
        matchingPaths.push(filePath);
      }
      // Recursively traverse subdirectories
      if (fs.statSync(filePath).isDirectory()) {
        traverseDirectory(filePath);
      }
    });
  }

  traverseDirectory(baseDir);
  return matchingPaths;
}

const baseDir = "/sample/path/to/a/folder";
const pattern = "pa%th/to/a%folder%";

const matches = findMatchingPaths(baseDir, pattern);
matches.forEach((match) => {
  console.log(match);
});
