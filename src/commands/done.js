const { getTasks, saveTasks } = require("../storage");

function done(args) {
    const id = Number(args[0]);

    if (!id) {
        console.log("Please provide a task ID.");
        return;
    }

    const tasks = getTasks();
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        console.log(`Task ${id} does not exist.`);
        return;
    }

    if (task.completed) {
        console.log(`Task ${id} is already completed.`);
        return;
    }

    task.completed = true;

    saveTasks(tasks);

    console.log(`✓ Task ${id} completed.`);
}

module.exports = done;