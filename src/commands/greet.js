function greet(args) {
    const name = args.join(" ");

    if (!name) {
        console.log("Please provide a name.");
        return;
    }

    console.log(`Hello, ${name}! 👋`);
}

module.exports = greet;