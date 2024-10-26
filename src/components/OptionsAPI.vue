<script>
    export default {
        // a função data e referente a valores
        data(){
            return {
                count: 0
            }
        },

        // a função metodos e referente a funções para alteramos as variaveis do data
        methods: {
            increment(){
                this.count++;
            }
        }
    }
</script>

<template>
    <div id="Count">
        <h1>Options</h1>
        {{ count }}
        <button v-on:click="increment" >Increment</button>
    </div>
</template>


<style>
    #Count{
        display: flex;
        flex-direction: column;
    }
</style>