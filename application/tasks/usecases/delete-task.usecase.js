import { TaskRemovableImplRepository } from '../../../infraestructure/tasks/repositories/task-removable-impl.repository';

export class DeleteTaskUseCase {
  execute(id){
    let userRepository = new TaskRemovableImplRepository(); 
    return userRepository.deleteUser(id);
  }
}
