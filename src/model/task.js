export class Task {
  constructor(id, title, description, status = "PENDING", dueDate = null) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
  }
}
