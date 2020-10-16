const sample = ["A", "B", "C", "D", "A", "B"];

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const arr = [...iterable];
  const newArr = arr.filter((el, i, src) => {
    if (src[i] !== src[i + 1] || (i === 0 && src[i] !== src[i + 1])) {
      return el;
    }
  });

  return newArr;
};

const unique = uniqueInOrder(sample);
