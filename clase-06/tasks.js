const fs = require("fs");

function readTasks() {
  const jsonString = fs.readFileSync("tasks.json", { encoding: "utf-8" });
  return JSON.parse(jsonString);
}

function writeTasks(tasks) {
  const jsonString = JSON.stringify(tasks, null, 2);
  fs.writeFileSync("tasks.json", jsonString);
}

function list(tasks) {
  tasks.forEach(function (task, i) {
    console.log(`- [${i}] ${task.title} (${task.state})`);
  });
}

function create(tasks, taskTitle) {
  if (taskTitle) {
    const newTask = {
      title: taskTitle,
      status: "to-do",
    };
    tasks.push(newTask);
    writeTasks(tasks);
  } else {
    console.log("Atención - Tenés que definir el titulo de la tarea");
  }
}

module.exports = {
  readTasks: readTasks,
  writeTasks: writeTasks,
  list: list,
  create: create,
};
