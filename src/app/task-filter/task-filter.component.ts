import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  onFilterSelect(event: Event) {
    const filterValue = (event.target as HTMLSelectElement).value;
    this.filterChanged.emit(filterValue); // Emitir el evento de cambio de filtro
  }
}
