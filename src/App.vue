<script setup>
import OptionsAPI from "./components/OptionsAPI.vue";
import CompositionsAPI from "./components/CompositonAPI.vue";
import Props from "./components/Props.vue";

  const dados = {
    nome: "Pedro",
    email: "pedroantonio5735@gmail.com",
    idade: 18
  }


</script>

<template>
  <h1>Api's no vue</h1>
  <div id="container">
    <OptionsAPI />
    <CompositionsAPI />
    
  </div>
  <Props mensagem="Mensagem passada via props utilizando CompositonAPI!" v-bind="dados" />
</template>

<style scoped>

#container{
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
