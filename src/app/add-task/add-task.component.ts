import { Component, EventEmitter, Output } from '@angular/core';

interface Task{
  taskName: string,
  isComplete: boolean
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = ''

  taskObj: Task = {
    taskName: '',
    isComplete: false
  }

  @Output() taskAdded = new EventEmitter<Task>()

  addTask() {
    if (this.taskName.trim()) {
      const newTask: Task = { taskName: this.taskName, isComplete: false }
      this.taskAdded.emit(newTask)
      this.taskName = ''
    }
  }
}
