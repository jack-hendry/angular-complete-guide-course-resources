import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // collection of directives for forms
import { NewTaskData } from '../../task/task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string;
  @Output() close = new EventEmitter<void>(); 
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private taskService: TasksService){}

  onCancel() {
    this.close.emit(); 
  }
  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },this.userId ); 

    this.close.emit(); 
  }
 
}
