export function getTask(){
    /* localStorage.setItem("tasks2",JSON.stringify([
        { id: 1, name: 'Task 1', state: 1 },
        { id: 2, name: 'Task 2', state: 1 },
    ]));  */
    const tasks = localStorage.getItem("tasks2");
    return tasks;
}

/* export function getTask(){
    try {
      const tasks = localStorage.getItem("tasks2");
      // Si no hay tareas, o el valor no es un JSON válido, devolvemos un array vacío
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      return []; // Devolvemos un array vacío en caso de error
    }
} */


export function updateTask(tasksTemp) {
    localStorage.setItem('tasks2', tasksTemp);
    return tasksTemp;
}

export function saveTask(tasksTemp) {
    localStorage.setItem('tasks2', tasksTemp);
    return tasksTemp;
}

export function deleteTask(tasksTemp) {
    console.log('tasks delete');
    console.log(tasksTemp);
    localStorage.setItem('tasks2', tasksTemp);
    return tasksTemp;
}