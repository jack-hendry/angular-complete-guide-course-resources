import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from '../task/task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from '../task/task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tastService: TasksService) {}

  get selectedUserTasks() {
    return this.tastService.getUserTasks(this.userId);
  }

  

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
