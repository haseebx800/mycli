#!/usr/bin/env node
const command = process.argv[2];
if (command === "hello") {
    console.log("Hello from Haseeb CLI 🚀");
}
else if (command === "help") {
    console.log(`
Haseeb CLI
Usage:
  haseeb <command>
Commands:
  hello    Say hello
  help     Show this help message
`);
}
else {
    console.log("Unknown command. Try: haseeb help");
}