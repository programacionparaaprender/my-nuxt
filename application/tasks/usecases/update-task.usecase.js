import { TaskWriterImplRepository } from '../../../infraestructure/tasks/repositories/task-writer-impl.repository';


export class UpdateTaskUseCase {
  execute(params) {
    let userRepository = new TaskWriterImplRepository();
    return userRepository.update(params);
  }
}
