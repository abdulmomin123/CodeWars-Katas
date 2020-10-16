const sample = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
const sampleTwo = [{ name: "Bart" }, { name: "Lisa" }];

function list(names) {
  let namesArr = names.map((el) => el.name);
  namesArr.splice(names.length - 1, 0, "&");
  return namesArr;

  // .join(" ");
}
const result = list(sample);

console.log(result);
