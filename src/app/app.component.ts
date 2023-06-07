import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  addTask(taskName: string) {
    const task: Task = {
      name: taskName,
      completed: false
    };
    this.tasks.push(task);
    this.filterTasks(); // Actualizar las tareas filtradas al agregar una nueva tarea
  }

  onFilterChanged(filterValue: string) {
    this.filterTasks(filterValue);
  }

  private filterTasks(filterValue: string = 'all') {
    if (filterValue === 'all') {
      this.filteredTasks = this.tasks;
    } else if (filterValue === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (filterValue === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }
}

  
  

