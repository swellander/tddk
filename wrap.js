module.exports = (str, col) => {
  if (str.length <= col) return str;

  //make copy
  let formattedStr = str.split('')
  let idx = col - 1;

  //move col backward until index is a space, not a letter
  while(str[idx - 1] !== ' ') {
    idx--;
  }

  //loop iterating for every insertion that needs to be made
  for (let i = 0; i < Math.floor(str.length / col); i++) {

    //insert \n at nearest appropriate location
    formattedStr.splice((idx), 0, '\n');
    idx += col;
  }

  return formattedStr.join('');
}
