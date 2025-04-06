import { ResponseDto } from './dtos/response.dto';
import { getTask, deleteTask } from '../../../shared/tasks';
import { TaskRemovableRepository } from '../../../domain/tasks/repositories/task-removable-repository';


export class TaskRemovableImplRepository extends TaskRemovableRepository {
  deleteUser(id) {
    let tasksList = getTask();
    if(tasksList != null && tasksList.length > 0){
      tasksList = JSON.parse(tasksList);
    }

    const message = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "eliminación"
    }
    let meta = {
      mensajes: [
        message
      ],
      totalRegistros: tasksList.length - 1,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    console.log('antes');
    console.log(tasksList);
    const task = tasksList.find(x=>x.id === id);
    tasksList = tasksList.filter(task => task.id !== id);
    tasksList = deleteTask(JSON.stringify(tasksList));
    console.log('despues');
    console.log(JSON.stringify(tasksList));
    let responseDto = new ResponseDto(meta, task);
    return responseDto;
  }
}
