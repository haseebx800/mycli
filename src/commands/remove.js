const { getTasks, saveTasks } = require("../storage");

function remove(args) {
    const id = Number(args[0]);

    if (!id) {
        console.log("Please provide a task ID.");
        return;
    }

    const tasks = getTasks();
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
        console.log(`Task ${id} does not exist.`);
        return;
    }

    const removedTask = tasks[index];

    tasks.splice(index, 1);

    saveTasks(tasks);

    console.log(`✓ Removed: ${removedTask.title}`);
}

module.exports = remove;