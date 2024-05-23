import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task{
  taskName: string,
  isComplete: boolean
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() filter: string = 'all';

  changeCheck(task: Task) {
    task.isComplete = !task.isComplete;
  }

  get filteredTasks(): Task[] {
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.isComplete === true);
    } else if (this.filter === 'incomplete') {
      return this.tasks.filter(task => task.isComplete === false);
    } else {
      return this.tasks;
    }
  }

}
