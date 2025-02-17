"use strict";

const fs = require("fs");
const axios = require("axios");
const fetch = require("node-fetch");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'weatherStation' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING keyword as parameter.
 *
 * Base URL: https://jsonmock.hackerrank.com/api/weather/search?name={keyword}
 *
 */

async function weatherStation(keyword) {
  let baseUrl = `https://jsonmock.hackerrank.com/api/weather/search?name=${keyword}`;
  let page = 1;
  let results = [];

  while (true) {
    let res = await fetch(`${baseUrl}&page=${page}`);
    let data = await res.json();

    data.data.forEach((record) => {
      let cityName = record.name;
      let temp = record.weather.split(" ")[0];
      let wind =
        record.status
          .find((status) => status.includes("Wind"))
          ?.split(" ")[1]
          .replace(/\D/g, "") || "0";
      let humidity =
        record.status
          .find((status) => status.includes("Humidity"))
          ?.split(" ")[1]
          .replace(/\D/g, "") || "0";

      results.push(`${cityName},${temp},${wind},${humidity}`);
    });

    if (page >= data.total_pages) break;
    page++;
  }

  return results.sort();
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const keyword = readLine();

  const result = await weatherStation(keyword);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
