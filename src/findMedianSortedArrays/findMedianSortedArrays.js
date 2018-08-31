const _ = require('underscore');

export const findMedianSortedArrays = (nums1, nums2) => {
  let flatten = _.flatten([nums1, nums2]);
  let sort = flatten.sort((a, b) => a - b);
  let idx;
  if (sort.length % 2 === 1) {
    idx = Math.floor(sort.length/2);
    return sort[idx];
  } else {
    idx = Math.floor(sort.length/2);
    return Math.floor(sort[idx] + sort[idx-1])/2;
  }
};