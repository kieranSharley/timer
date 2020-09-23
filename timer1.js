
let beeps = process.argv.slice(2);
for (let beep of beeps) {
  setTimeout(() => {
    process.stdout.write(` alarm sound\n`);
  }, beep * 1000);
}

