const { getTasks } = require("../storage");

function tasks() {
    const allTasks = getTasks();

    if (allTasks.length === 0) {
        console.log("No tasks yet.");
        return;
    }

    console.log("\nYour Tasks\n");

    allTasks.forEach((task) => {
        const status = task.completed ? "☑" : "☐";

        console.log(`${task.id}. ${status} ${task.title}`);
    });

    console.log();
}

module.exports = tasks;