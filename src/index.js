// jshint esversion:6


module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return [];

  let newArr = [];
  for (let i = 0; i <= matrix.length - 1; i++) {
  	if (i % 2 === 0) {
  		newArr.push(matrix[i]);
  	} else if (i % 2)
  	newArr.push(matrix[i].reverse());
  }
  return resultArray(newArr);
};

function resultArray(array) {
	let result = [];
	array.forEach(item => {
  	item.forEach(el => {
  		result.push(el);
  	});
  });
  return result;
}