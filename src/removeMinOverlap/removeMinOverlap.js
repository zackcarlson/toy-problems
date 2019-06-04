/**
  Given a collection of intervals, find the minimum number of intervals 
  you need to remove to make the rest of the intervals non-overlapping.

  Intervals can "touch", such as [0, 1] and [1, 2], but they won't be 
  considered overlapping.

  For example, given the intervals (7, 9), (2, 4), (5, 8), 
  return 1 as the last interval can be removed and the first two won't overlap.

  The intervals are not necessarily sorted in any order.

  I: 
    array of arrays, that contain number ranges (ie [[7, 9],[2, 4]])
  O: 
    number, representing number of 
    subarrays to remove to make subarrays non overlapping
  C: 
    0(n) time, comparing one set of ranges to rest
    0(1) space, incrementing a number 
  E: 
    empty array set, return 0
    no overlaps, return 0
  
  Diagram: 
    
    Ex: [ [7, 9], [2, 4], [5, 8] ]
            ^
          compare
          against
          other
          ranges    ^        ^

            2 <= 7 <= 4     5 <= 7 <= 8
            2 <= 9 <= 4     5 <= 9 <= 8
            7 <= 2 <= 9     7 <= 5 <= 9
            7 <= 4 <= 9     7 <= 8 <= 9
                   
               => NO!          => YES!
                               increment count by 1
 */

export const removeMinOverlap = (arr) => {
  if (!arr.length) return 0;
  let comparitorRange = arr[0];
  let overlaps = 0;

  for (let i = 1; i < arr.length; i++) {
    let curRange = arr[i];
    if (
      curRange[0] <= comparitorRange[0] && comparitorRange[0] <= curRange[1] ||
      curRange[0] <= comparitorRange[1] && comparitorRange[1] <= curRange[1] ||
      comparitorRange[0] <= curRange[0] && curRange[0] <= comparitorRange[1] ||
      comparitorRange[0] <= curRange[1] && curRange[1] <= comparitorRange[1]
    ) overlaps++;
  }

  return overlaps;
};