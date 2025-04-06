import { ResponseDto } from './dtos/response.dto'; 
import { TaskWriterRepository } from '../../../domain/tasks/repositories/task-writer-repository';
import { getTask, saveTask, updateTask } from '../../../shared/tasks';

export class TaskWriterImplRepository extends TaskWriterRepository {

  update(params) {
    let tasksList = getTask();
    if(tasksList != null && tasksList.length > 0){
      tasksList = JSON.parse(tasksList);
    }
    const index = tasksList.findIndex(user => user.id === params.id);
    if (index !== -1) tasksList[index] = params;
    updateTask(JSON.stringify(tasksList));
    const message = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "escritura"
    }
    let meta = {
      mensajes: [
        message
      ],
      totalRegistros: 1,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, params);
    return responseDto;
  }

  create(params) {
    let tasksList = getTask();
    if(tasksList != null && tasksList.length > 0){
      tasksList = JSON.parse(tasksList);
    }
    const message = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "escritura"
    }
    let meta = {
      mensajes: [
        message
      ],
      totalRegistros: tasksList.length + 1,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    tasksList.push(params);
    saveTask(JSON.stringify(tasksList));
    let responseDto = new ResponseDto(meta, params);
    return responseDto;
  }

}
