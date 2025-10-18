import { Task } from "../model/task.js";

export class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  createTask(title, description, dueDate) {
    const task = new Task(null, title, description, "PENDING", dueDate);
    return this.taskRepository.save(task);
  }

  getTasks(status) {
    return this.taskRepository.findAll(status);
  }

  updateTaskStatus(id, status) {
    return this.taskRepository.updateStatus(id, status);
  }

  deleteTask(id) {
    return this.taskRepository.delete(id);
  }

  getOverdueTasks() {
    return this.taskRepository.findOverdue();
  }
}
