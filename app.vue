<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">Mi Web</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Inicio</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">Sobre Nosotros</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/tasks">Tareas</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup></script>
