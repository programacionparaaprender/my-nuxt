<template>
    <div>
      <div class="table-responsive">
        <!-- Formulario para agregar nueva tarea -->
        <div>
          <form class="form">
            <div class="form-group">
              <label for="labeltask">Agregar tarea</label>
              <input v-model="name" id="itask" class="form-control" />
            </div>
            <div class="form-group mt-2">
              <button class="btn btn-primary" type="button" @click="saveTask">
                Guardar
              </button>
            </div>
          </form>
        </div>
  
        <!-- Tabla de tareas -->
        <table class="table table-striped table-hover mt-3">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in tasks" :key="task.id">
              <td>{{ index + 1 }}</td>
              <td>
                <input
                  v-if="editIndex === index"
                  v-model="editTask.name"
                  class="form-control"
                />
                <span v-else>{{ task.name }}</span>
              </td>
              <td>
                <select
                  v-if="editIndex === index"
                  v-model="editTask.state"
                  class="form-select"
                >
                  <option v-for="state in states" :key="state.id" :value="state.id">
                    {{ state.name }}
                  </option>
                </select>
                <span v-else>
                  {{ getStateName(task.state) }}
                </span>
              </td>
              <td>
                <button
                  v-if="editIndex !== index"
                  class="btn btn-warning btn-sm mx-1"
                  @click="editTaskMethod(index)"
                >
                  ✏️ Editar
                </button>
                <button
                  v-else
                  class="btn btn-success btn-sm mx-1"
                  @click="saveEdit(index)"
                >
                  💾 Guardar
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteTask(index)">
                  🗑 Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        tasks: [],
        key:"tasks2",
        states: [
          { id: 1, name: "Pendiente" },
          { id: 2, name: "En progreso" },
          { id: 3, name: "Terminado" }
        ],
        editIndex: null,
        editTask: { name: "", state: null }
      };
    },
    mounted(){
        const tasks = localStorage.getItem(this.key);
        if(tasks != null){
            this.tasks = JSON.parse(tasks);
        }
    },
    methods: {
      saveTask() {
        if (!this.name.trim()) {
          alert("El nombre de la tarea no puede estar vacío.");
          return;
        }
  
        let newId = this.tasks.length + 1;
        while (this.tasks.some(task => task.id === newId)) {
          newId++;
        }
  
        this.tasks.push({
          id: newId,
          name: this.name,
          state: 1
        });
        localStorage.setItem(this.key, JSON.stringify(this.tasks));
        this.name = "";
      },
      editTaskMethod(index) {
        this.editIndex = index;
        this.editTask = { ...this.tasks[index] };
      },
      saveEdit(index) {
        this.tasks[index] = { ...this.editTask };
        this.editIndex = null;
        localStorage.setItem(this.key, JSON.stringify(this.tasks));
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
        localStorage.setItem(this.key, JSON.stringify(this.tasks));
      },
      getStateName(stateId) {
        const state = this.states.find(s => s.id === stateId);
        return state ? state.name : "Desconocido";
      }
    }
  };
  </script>
  
  <style>
  .cover {
    padding: 20px;
    margin: 40px 2px;
    border: 1px solid #d2e0e6;
  }
  </style>
  