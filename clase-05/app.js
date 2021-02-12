const fs = require("fs");

const jsonString = fs.readFileSync("tasks.json", { encoding: "utf-8" });
const tasks = JSON.parse(jsonString);

const action = process.argv[2];

switch (action) {
  case "listar":
    for (let i = 0; i < tasks.length; i++) {
      console.log("- " + tasks[i].title);
    }
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
}
