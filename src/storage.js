const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "..", "data", "tasks.json");

function getTasks() {
    const data = fs.readFileSync(dataFile, "utf-8");
    return JSON.parse(data);
}

function saveTasks(tasks) {
    fs.writeFileSync(
        dataFile,
        JSON.stringify(tasks, null, 2)
    );
}

module.exports = {
    getTasks,
    saveTasks
};