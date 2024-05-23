import { Component } from '@angular/core';

interface Task{
  taskName: string,
  isComplete: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filter: string = 'all';

  addTask(task: Task) {
    this.tasks.push(task);
  }

  setFilter(filter: string) {
    this.filter = filter;
  }
}
