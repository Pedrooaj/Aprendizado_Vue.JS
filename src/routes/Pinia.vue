<template>
    <h1>Rota de estado globais utilizando Pinia</h1>
    {{ store.count }}
    <br>
    <button @click="store.increment">Incremetar</button>

</template>

<script setup>
    import { useGlobalStore } from '../stores/GlobalStore';
    const store = useGlobalStore();
</script>