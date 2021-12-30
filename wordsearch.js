const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (l.includes(word)) { 
      return true;
    }
  }
  return false;
}



const transpose = function(matrix) {
    let muse = [];
    for (let col = 0; col < matrix[0].length; col++) {
      muse.push(matrix.map(x => x[col]))
      // console.log(muse)
    }
    main = muse;
  
    return main;
};





module.exports = wordSearch