const sample = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
const sampleTwo = [{ name: "Bart" }, { name: "Lisa" }];

function list(names) {
  if (names.length === 0) return "";
  if (names.length < 2) return names[0].name;

  let namesArr = names.map((el) => el.name);
  namesArr = namesArr.join(", ");
  // namesArr.splice(names.length - 1, 0, "&");
  namesArr = [...namesArr];
  namesArr.splice(namesArr.lastIndexOf(" "), 0, "& ");
  return namesArr;
}
const result = list(sample);

console.log(result);
