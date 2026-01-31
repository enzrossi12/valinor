export class CreateTaskDto {
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
}