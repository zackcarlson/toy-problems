/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).

IOCE:

I: string
O: longest palindrome string
C: account for whitespace; quadratic
E: NA

Diagram:

Input: "My dad is a racecar athlete"

nested for loop
"M" --> compare substring to reversed substring
if it's the same word backwards and forwards and its length
is greater than longest palindrome, reversed substring becomes the longest

"M" --> "M" same? ==> yes ==> longest palindrome
"My" --> "yM"  same? ==> no
"My " --> " yM" same? ==> no
...etc.

"a" --> "a"
"a " ==> " a"
" a r" ==> "r a"
"a ra" ==> "ar a"
"a rac" ==> "car a"
"a race" ==> "ecar a"
"a racec" ==> "cecar a"
"a raceca" ==> "acecar a"
"a racecar" ==> "racecar a"
"a racecar " ==> " racecar a"
"a racecar a" ==> "a racecar a"

return longest palindrome

Output: "a raceacar a"
*/

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

export const longestPalindrome = (string) => {
  // create longest palindrome placeholder
  let longestPalin = '';
  // loop through string
  for (let i = 0; i < string.length; i++) {
    // loop through string again
    for (let j = 0; j < string.length; j++) {
      let substr = string.substring(i, j);
      let reversedSubStr = reverseString(substr);
      // if reversed substring is a palindrome and its' len > longest palin len
      if (substr === reversedSubStr && reversedSubStr.length > longestPalin.length) {
        // reversed substring becomes longest palindrome
        longestPalin = reversedSubStr;
      }
    }
  }
  // return longest palindrome
  return longestPalin;
};