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
  hello       Say hello
  help        Show this help message
  greet       Greet someone
  --version   Show version
`);
}

else if (command === "--version") {
    console.log("1.0.0");
}

else if (command === "greet") {
    const name = process.argv.slice(3).join(" ");

    if (!name) {
        console.log("Please provide a name.");
    } else {
        console.log(`Hello, ${name}! 👋`);
    }
}

else {
    console.log("Unknown command. Try: haseeb help");
}