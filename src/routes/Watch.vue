<template>
    <h1>Uso do Watch Effect com v-model</h1>
    <!-- v-model muda a variavel dinamica com base no valor do input -->
    <input v-model="input" type="text">
    <br>
    <br>
    {{ input }}
</template>

<script setup>
    import { ref, watch } from 'vue';

    const input = ref();

    watch(input, () => {
        console.log(input.value);
    })


    

</script>