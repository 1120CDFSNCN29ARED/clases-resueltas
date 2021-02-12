const taskUtils = require("./tasks");

const tasks = taskUtils.readTasks();

const action = process.argv[2];
const extraParam = process.argv[3];

switch (action) {
  case "listar":
    taskUtils.list(tasks);
    break;
  case "crear":
    taskUtils.create(tasks, extraParam);
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
}
