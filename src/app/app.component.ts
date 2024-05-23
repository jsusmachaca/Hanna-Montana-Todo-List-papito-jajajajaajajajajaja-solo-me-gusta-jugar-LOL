import { Component, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>

  tasks: Task[] = [];
  filter: string = 'all';

  addTask(task: Task) {
    this.tasks.push(task);
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  ngAfterViewInit() {
    console.log(this.audio.nativeElement);
    this.audio.nativeElement.volume = 0.2
  }
}
