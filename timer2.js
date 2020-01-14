const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
//interperet keyboard input
stdin.on('data', (key) => {
  if (key <= '\u0039' && key >= '\u0031') { //Sets a timer for a number of seconds base on user input, between 1 and 9
    process.stdout.write('Setting timer for ' + key + ' seconds\n')
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000)
  }
  if (key === '\u0062') { //Beeps when b is pressed
    process.stdout.write('\x07');
  }
  if (key === '\u0003') { //exits when ctrl c is pressed; prints message first
    process.stdout.write('Thanks for using me, ciao!\n')
    process.exit();
  }
})