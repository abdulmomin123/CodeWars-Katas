const sample = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
const sampleTwo = [{ name: "Bart" }, { name: "Lisa" }];

function list(names) {
  if (names.length === 0) return "";
  if (names.length < 2) return names[0].name;

  let namesArr = names.map((el) => el.name);
  namesArr.splice(names.length - 1, 0, "&");
  namesArr = namesArr.join(" ");
  return namesArr;
}
const result = list(sample);

console.log(result);
