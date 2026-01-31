import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  // Nosso "banco de dados" temporário
  private tasks: Task[] = [
    { id: '1', title: 'Aprender Angular', description: 'Estudar o básico do CLI', status: 'done' },
    { id: '2', title: 'Fazer o Desafio', description: 'Implementar o Kanban', status: 'doing' },
    { id: '3', title: 'Enviar para a Field Control', description: 'Fazer o push final', status: 'todo' },
  ];

  findAll() {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto) {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9), // Gerador de ID simples
      ...createTaskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    const index = this.tasks.findIndex(t => t.id === id);
    this.tasks[index] = { ...this.tasks[index], ...updateTaskDto };
    return this.tasks[index];
  }

  remove(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return { deleted: true };
  }
}