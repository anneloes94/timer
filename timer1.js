// is not a number
// is negative
// no input

const input = process.argv.slice(2)

if (input.length > 0) {
  for (let arg of input) {
    if (arg >= 0) { 
    setTimeout(() => {
      process.stdout.write(".");
    }, Number(arg)*1000)
    }
  }
}
