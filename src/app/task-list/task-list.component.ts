import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges {
  @Input() tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filterValue: string = 'all';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks']) {
      this.filterTasks();
    }
  }

  filterTasks() {
    if (this.filterValue === 'all') {
      this.filteredTasks = this.tasks;
    } else if (this.filterValue === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.filterValue === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  updateTaskStatus(task: Task) {
    task.completed = !task.completed;
    this.filterTasks(); // Actualizar las tareas filtradas después de cambiar el estado de una tarea
  }

  onFilterSelect(filterValue: string) {
    this.filterValue = filterValue;
    this.filterTasks(); // Filtrar las tareas nuevamente al cambiar la opción del filtro
  }

  getCompletedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }
  
  
}
