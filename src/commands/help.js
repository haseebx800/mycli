function help() {
    console.log(`
Haseeb CLI

Usage:
  haseeb <command>

Commands:
  hello                 Say hello
  help                  Show help
  greet <name>          Greet someone
  add <task>            Add a task
  tasks                 Show all tasks
  --version             Show version
  done <id>              Complete a task
  remove <id>            Remove a task
  clear                  Remove all tasks
`);
}

module.exports = help;