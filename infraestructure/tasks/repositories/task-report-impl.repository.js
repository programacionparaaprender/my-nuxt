import { ResponseDto } from './dtos/response.dto'; 
import { TaskReportRepository } from '../../../domain/tasks/repositories/task-report-repository';
import { getTask } from '../../../shared/tasks';
export class TaskReportImplRepository extends TaskReportRepository {

    getTask(id) {
      let tasks = getTask();
      if(tasks != null && tasks.length > 0){
        this.tasks = JSON.parse(tasks);
      }else {
        tasks = [];
      }
      const task = tasks.find(x=>x.id === id);
      const message = {
          codigo: "001",
          mensaje: "satisfactorio",
          tipo: "lectura"
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
      let responseDto = new ResponseDto(meta, task);
      return responseDto;
  }

  getTaskList() {
    let tasks = getTask();
    if(tasks != null && tasks.length > 0){
      tasks = JSON.parse(tasks);
    }else{
      tasks = [];
    }
    const message = {
      codigo: "001",
      mensaje: "satisfactorio",
      tipo: "lectura"
    }
    let meta = {
      mensajes: [
        message
      ],
      totalRegistros: tasks.length,
      idTransaccion: "1",
      numeroPaginaSiguiente: "1",
      numeroTotalPaginas: "1"
    }
    let responseDto = new ResponseDto(meta, tasks);
    return responseDto;
  }
}
