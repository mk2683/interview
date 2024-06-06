var dates = ["1/2/2019", "11/12/2013", "1/1/1980", "11/1/1934"];

// Function to convert date string (mm/dd/yyyy) to Date object
function parseDate(dateStr) {
  var parts = dateStr.split("/");
  // Note: months are 0-based in JavaScript Date constructor (January is 0)
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

// Sort the array of date strings by converting them to Date objects
dates.sort(function (a, b) {
  // Convert each date string to Date object using parseDate function
  var dateA = parseDate(a);
  var dateB = parseDate(b);
  // Compare the Date objects to determine order
  if (dateA < dateB) {
    return -1; // dateA comes before dateB
  }
  if (dateA > dateB) {
    return 1; // dateA comes after dateB
  }
  return 0; // dates are equal
});

console.log(dates); // Output sorted array of date strings
