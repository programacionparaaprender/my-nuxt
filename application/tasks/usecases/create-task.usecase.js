import { TaskWriterImplRepository } from "../../../infraestructure/tasks/repositories/task-writer-impl.repository"; 

export class CreateTaskUseCase {
  execute(params) {
    let taskRepository = new TaskWriterImplRepository();
    return taskRepository.create(params);
  }
}
