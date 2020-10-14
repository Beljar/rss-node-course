const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'Task',
    order = 0,
    description = 'task',
    userId = uuid(),
    boardId = uuid(),
    columnId = uuid()
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
  static toResponse(task) {
    return {
      id: task.id,
      title: task.title,
      order: task.order,
      description: task.description,
      userId: task.userId,
      boardId: task.boardId,
      columnId: task.columnId
    };
  }
}

module.exports = Task;
