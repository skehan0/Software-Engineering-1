import { reactive } from 'vue';

export const store = reactive({
    count: 0,
    user:null,
    increment() {
        this.count++
    }
})
