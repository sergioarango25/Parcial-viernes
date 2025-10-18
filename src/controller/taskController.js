import express from "express";

export function TaskController(taskService) {
  const router = express.Router();

  // Crear tarea
  router.post("/tasks", (req, res) => {
    const { title, description, dueDate } = req.body;
    if (!title) return res.status(400).json({ error: "El título es obligatorio" });
    const task = taskService.createTask(title, description, dueDate);
    res.status(201).json(task);
  });

  // Listar tareas
  router.get("/tasks", (req, res) => {
    const { status } = req.query;
    const tasks = taskService.getTasks(status);
    res.json(tasks);
  });

  // Actualizar estado
  router.patch("/tasks/:id/status", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const updated = taskService.updateTaskStatus(parseInt(id), status);
    if (!updated) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json(updated);
  });

  // Eliminar tarea
  router.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const deleted = taskService.deleteTask(parseInt(id));
    if (!deleted) return res.status(404).json({ error: "Tarea no encontrada" });
    res.status(204).send();
  });

  // Tareas vencidas 
  router.get("/tasks/overdue", (req, res) => {
    const tasks = taskService.getOverdueTasks();
    res.json(tasks);
  });

  return router;
}
