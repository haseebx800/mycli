if (command === "hello") {
    // ...
}

else if (command === "help") {
    // ...
}

else if (command === "--version") {
    // ...
}

else if (command === "greet") {
    const name = process.argv[3];

    if (!name) {
        console.log("Please provide a name.");
    } else {
        console.log(`Hello, ${name}! 👋`);
    }
}

else {
    console.log("Unknown command. Try: haseeb help");
}