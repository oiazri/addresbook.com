const names = ["Azri", "Siregar", "Putra"];

const keyword = "I";

const foundNames = names.filter((name) =>
  name.toLowerCase().includes(keyword.toLowerCase())
);

console.log(foundNames);
