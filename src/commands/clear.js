const { saveTasks } = require("../storage");

function clear() {
    saveTasks([]);

    console.log("✓ All tasks cleared.");
}

module.exports = clear;