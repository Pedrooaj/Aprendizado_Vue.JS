import { defineStore } from "pinia";
import { ref, computed } from "vue";

// defininindo a store que ira prover dados globais pelo pinia
export const useGlobalStore = defineStore('global', () => {

    const count = ref(0);


    function increment(){
        count.value++;
    }

    const showCount = computed(() => {
        return count.value;
    })


    // retornando valores que irão ser acessados de forma global na aplicação
    return {
        count,increment,showCount
    }

})