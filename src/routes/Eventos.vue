<template>
    <h1>Rota eventos</h1>
    <p>Para capturmos evento no vue utilizamos @EVENTO outra forma támbem seria utilizando v-on:EVENTO </p>
    <button @click="(event) => increment(event, 1)">Clique aqui</button>
    <!-- Pode ser utiliado támbem v-on:click  -->
</template>

<script setup>
    import { ref, watch, watchEffect } from 'vue';
    
    const count = ref(0); // Hook equivalente ao useState.

    function increment(event,add){
        count.value += add;
        console.log(count.value);
        console.log(event);
    }

    // Hooks equivalentes ao useEffect

    // executa apenas na mudaça do estado
    // watch executa apenas quando seu elemento for alterado
    watch(count, (newValue,oldValue) => {
        console.log("watch executado");
    })

    // executa quando a página for carregada
    // watchEffect executa toda vez que algum elemento utilizado por ele for alterado.
    watchEffect(() => {
        console.log("WatchEffect executado " + count.value);  
    })
</script>