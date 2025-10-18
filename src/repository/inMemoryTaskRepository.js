import { Task } from "../model/task.js";

export class InMemoryTaskRepository {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  save(task) {
    task.id = this.nextId++;
    this.tasks.push(task);
    return task;
  }

  findAll(status) {
    return status ? this.tasks.filter(t => t.status === status) : this.tasks;
  }

  findById(id) {
    return this.tasks.find(t => t.id === id);
  }

  updateStatus(id, status) {
    const task = this.findById(id);
    if (!task) return null;
    task.status = status;
    return task;
  }

  delete(id) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }

  findOverdue() {
    const now = new Date();
    return this.tasks.filter(
      t => t.dueDate && new Date(t.dueDate) < now && t.status !== "DONE"
    );
  }
}
