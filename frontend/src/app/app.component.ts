import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';
import { Task } from './task.model';
import { DragDropModule, moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.scss'    
})
export class AppComponent implements OnInit {
  // Array dinâmico de colunas
  columns: { name: string, id: string, tasks: Task[] }[] = [
    { name: 'Para Fazer', id: 'todoList', tasks: [] },
    { name: 'Em Andamento', id: 'doingList', tasks: [] },
    { name: 'Concluído', id: 'doneList', tasks: [] }
  ];

  newTaskTitle: string = '';

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        // Distribui as tarefas para as colunas base
        this.columns[0].tasks = tasks.filter(t => t.status === 'todo');
        this.columns[1].tasks = tasks.filter(t => t.status === 'doing');
        this.columns[2].tasks = tasks.filter(t => t.status === 'done');
      }
    });
  }

  addColumn() {
    const columnName = prompt('Digite o nome da nova coluna:');
    if (columnName) {
      const newId = columnName.toLowerCase().replace(/\s/g, '') + 'List';
      this.columns.push({ name: columnName, id: newId, tasks: [] });
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const newStatus = this.determineStatus(event.container.id);
      const movedTask = event.container.data[event.currentIndex];
      
      console.log(`Tarefa ${movedTask.title} movida para ${newStatus}`);
      
    }
  }
  

  determineStatus(containerId: string): 'todo' | 'doing' | 'done' {
    if (containerId === 'doingList') return 'doing';
    if (containerId === 'doneList') return 'done';
    return 'todo'; 
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Partial<Task> = {
        title: this.newTaskTitle,
        description: 'Nova tarefa',
        status: 'todo'
      };

      this.taskService.createTask(newTask).subscribe({
        next: (savedTask: Task) => { 
          this.columns[0].tasks.push(savedTask); 
          this.newTaskTitle = '';
          this.cdr.detectChanges();
        },
        error: (err: any) => console.error('Erro ao salvar:', err)
      });
    }
  }

  dropColumn(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  // Função para excluir
deleteTask(column: any, task: Task) {
  if (window.confirm(`Excluir "${task.title}"?`)) { 
    this.taskService.deleteTask(task.id).subscribe({
      next: () => {
        column.tasks = column.tasks.filter((t: Task) => t.id !== task.id);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao deletar:', err)
    });
  }
}

// Função para editar tarefa
editTask(task: Task) {
  const newTitle = window.prompt('Editar título:', task.title);
  
  if (newTitle !== null && newTitle.trim() !== '' && newTitle !== task.title) {
    const updatedTask = { ...task, title: newTitle.trim() };

    this.taskService.updateTask(updatedTask).subscribe({
      next: (res) => {
        this.columns.forEach(col => {
          const index = col.tasks.findIndex(t => t.id === task.id);
          if (index !== -1) {
            col.tasks[index] = { ...res };
            col.tasks = [...col.tasks];
          }
        });
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Detalhes do erro do servidor:', err);
        alert(`Erro: ${err.status} - ${err.message}`);
      }
    });
  }
}

  editColumn(column: any) {
  const newName = window.prompt('Novo nome da coluna:', column.name);
  if (newName && newName.trim() !== '' && newName !== column.name) {
    column.name = newName.trim();
    this.cdr.detectChanges();
  }
}
}