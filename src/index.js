
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( matrix == undefined || matrix.length == 0 ){
    return [];
  }


  let res = []
  for(let i = 0; i < matrix.length; i++){
    if((i+1) % 2 == 0){
      matrix[i].reverse();
    }
    for(let j = 0; j < matrix[i].length; j++){
      res.push(matrix[i][j]);
    }
  }

  return res;
}


