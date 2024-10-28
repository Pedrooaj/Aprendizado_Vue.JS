<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <ul id="nav">
    <RouterLink to="/">
    API's
    </RouterLink>
    <RouterLink to="/eventos">
      Eventos
    </RouterLink>
    <RouterLink to="/pinia">
      Pinia
    </RouterLink>
    <RouterLink to="/watch">
      Watch
    </RouterLink>
  </ul>
  <RouterView />
</template>

<style scoped>
    #nav{
      padding: 0;
      display: flex;
      right: 25px;
      gap: 15px;
      position: absolute;
      top: 5px;
    }
    a{
      font-size: 1.5rem;
    }
</style>

