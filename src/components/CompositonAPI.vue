<!-- Obervasão quando se trata de CompositonAPI devemos sempre sinalizar com setup -->
<script setup>

    import { ref } from 'vue';

    const count = ref(0); // criando uma variavel dinamica no vue equivalente ao useState

    function increment() {
        count.value++;
    }
</script>

<template>
    <div id="Count">
        <h1>Composition</h1>
        {{ count }}
        <!-- aqui utilizamos v-on:click para definirmos a ação pelo clique do botão-->
        <button v-on:click="increment" >Increment</button>
    </div>
</template>


<style>
    #Count{
        display: flex;
        flex-direction: column;
    }
</style>