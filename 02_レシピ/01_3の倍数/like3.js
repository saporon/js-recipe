const like3 = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 || String(n).includes("3")) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
like3(34)
