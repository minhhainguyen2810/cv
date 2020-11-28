function main() {
  console.log("Asd");
}

function main(a) {
  console.log(arguments.callee);
}

main(1, 2, 3, [1241, 123]);
