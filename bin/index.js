#!/usr/bin/env node

const command = process.argv[2];

if (command === "hello") {
    console.log("Hello from Haseeb CLI 🚀");
} else {
    console.log("Unknown command");
}