import express from "express";
import bodyParser from "body-parser";
import { TaskController } from "./controller/taskController.js";
import { TaskService } from "./service/taskService.js";
import { InMemoryTaskRepository } from "./repository/inMemoryTaskRepository.js";

const app = express();
app.use(bodyParser.json());


// dependencias
const repo = new InMemoryTaskRepository();
const service = new TaskService(repo);
app.use("/", TaskController(service));

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send("✅ API de tareas funcionando correctamente");
});
