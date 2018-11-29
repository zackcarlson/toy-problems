const lowestNonExistentPositive = (ints) => {
  // storage for all numbers 
  let intsPresent = {};
  // variable to hold the lowest positive num 
  let lowestNEP = Number.MAX_VALUE;
  // loop through given ints // [1, 2, 0]
  //    store each int into storage 
  //     {1:1}           0th pass 
  //     {1:1, 2:2}      1st pass 
  //     {1:1, 2:2, 0:0} 2nd pass
  for (let int of ints) {
    intsPresent[int] = int;
    if (int <= 0) continue;
    lowestNEP = Math.min(lowestNEP, int);
  }
  if (lowestNEP === Number.MAX_VALUE) return 1;

  //    set the lowest pos to lowest positive placeholder 
  //     pos = 1 0th pass
  //     pos = 1 1st pass
  //     pos = 1 2nd pass

  // temp assigned to pos 
  let temp = lowestNEP;
  // while a given num (temp) does exist in storage 
  while (intsPresent[temp]) {
  //   if pos === 1 
  //     increment temp by 1
    if (lowestNEP === 1) {
      temp++;
    } else {
      temp--;
    }
  //   if pos >= 2
  //     decrement temp by 1
  }

  // return temp
  return temp;
};
export default lowestNonExistentPositive;