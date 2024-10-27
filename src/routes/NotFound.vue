<template>
    <h1>404</h1>
    <h2>Página não encontrada</h2>
    <button @click="router.back()">Voltar</button>
</template>
<script setup>
    // importanto useRouter para utilizarmos atributos das rotas no Vue-Router
    import { useRouter } from 'vue-router';
    const router = useRouter();

</script>