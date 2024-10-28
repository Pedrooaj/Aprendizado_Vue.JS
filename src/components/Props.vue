<template>
    <p>{{ mensagem }}</p> 
    <p>{{ nome }}</p>
    <p>{{ email }}</p>
    <p>{{ idade }}</p>
</template>

<script setup>
    // definindo as props e seus respectivos tipos que iremos receber
    const props = defineProps({
        mensagem: String,
        nome: String,
        idade: Number,
        email: String
    })

</script>