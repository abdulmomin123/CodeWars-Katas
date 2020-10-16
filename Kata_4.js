const sample = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((el) =>
      [...el].map((el, i) => (i === 0 ? el.toUpperCase() : el)).join("")
    )
    .join(" ");
};

const result = sample.toJadenCase();

console.log(result);
