export class TaskDTO {
  constructor(task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.dueDate = task.dueDate;
  }
}
