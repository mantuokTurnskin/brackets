module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) return false;

  const isPariedBracketsInString = (str, bracketsConfig) => {
    let pairedBracketList = [];
    for(let elem of bracketsConfig){
      pairedBracketList.push(elem[0] + elem[1]);
    }
    //['()', '[]', '{}', '||'];
    for (let pair of pairedBracketList) {
      if (str.indexOf(pair) !== -1) return [true, pair];
    }
    return [false, ''];
  }

  while (str.length > 0) {
    let a = isPariedBracketsInString(str, bracketsConfig);
    if (!a[0]) return false;
    str = str.slice(0, str.indexOf(a[1])) + str.slice(str.indexOf(a[1]) + 2);
  }
  return true;
}
