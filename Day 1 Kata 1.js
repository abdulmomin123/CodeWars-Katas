const sample = ["a", "a", "b", "b"];

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const arr = [...iterable];
  const newArr = arr.filter((el, i, src) => {
    if (i !== i + 1) {
      return i;
    }
  });

  return newArr;
};

const unique = uniqueInOrder(sample);
