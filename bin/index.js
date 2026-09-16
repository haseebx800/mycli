#!/usr/bin/env node

const hello = require("../src/commands/hello");
const help = require("../src/commands/help");
const greet = require("../src/commands/greet");
const add = require("../src/commands/add");
const tasks = require("../src/commands/tasks");
const done = require("../src/commands/done");
const remove = require("../src/commands/remove");
const clear = require("../src/commands/clear");

const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {

    case "hello":
        hello();
        break;

    case "help":
        help();
        break;

    case "greet":
        greet(args);
        break;

    case "add":
        add(args);
        break;

    case "tasks":
        tasks();
        break;

    case "--version":
        console.log("1.0.0");
        break;

    case "done":
        done(args);
        break;

    case "remove":
        remove(args);
        break;

    case "clear":
        clear();
        break;

    default:
        console.log("Unknown command. Try: haseeb help");
}