// Can be made pallindrome or not after removing a character

// function isPalindrome(str, start, end) {
//     while (start < end) {
//         if (str[start] !== str[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

function canMakePalindrome(s) {
  // Check if the string is already a palindrome
  if (isPalindrome(s)) {
    return true;
  }

  // Initialize pointers
  let left = 0;
  let right = s.length - 1;

  // Iterate over the string
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      // Try removing either the left or right character to check palindrome property
      const subStr1 = s.substring(left, right); // Remove character at 'right' index
      const subStr2 = s.substring(left + 1, right + 1); // Remove character at 'left' index

      console.log(s, isPalindrome(subStr1));
      console.log(s, isPalindrome(subStr2));
      return isPalindrome(subStr1) || isPalindrome(subStr2);
    }
  }

  return true;
}

// Test cases
const strings = ["abc", "abca", "radar", "apple", "racecar", "deed", "level"];

strings.forEach((s) => {
  if (canMakePalindrome(s)) {
    console.log(`'${s}' can be made into a palindrome.`);
  } else {
    console.log(`'${s}' cannot be made into a palindrome.`);
  }
});
