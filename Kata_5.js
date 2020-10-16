const sample = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
const sampleTwo = [{ name: "Bart" }, { name: "Lisa" }];

function list(names) {
  return names.map((el) => el.name);
}
const result = list(sample);

console.log(result);
