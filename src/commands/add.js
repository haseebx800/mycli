const { getTasks, saveTasks } = require("../storage");

function add(args) {
    const title = args.join(" ");

    if (!title) {
        console.log('Please provide a task.');
        console.log('Example: haseeb add "Learn Java"');
        return;
    }

    const tasks = getTasks();

    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };

    tasks.push(newTask);

    saveTasks(tasks);

    console.log(`✓ Task added: ${title}`);
}

module.exports = add;