module.exports = (nums, target) => {
  //prime example of ratcheting
  //sort nums array
  const sorted = nums.sort();
  //loop over length of array
  let start = 0;
  let end = nums.length-1;
  for (let i = 0; i < nums.length; i++) {
    const sum = sorted[start] + sorted[end]; 
    if (sum > target) end--;
    else if (sum < target) start++;
    else return [start, end]; 
  }

  return [];
}
