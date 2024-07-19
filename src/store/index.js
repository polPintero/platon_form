import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            additionalAmount: 0
        }
    },
    getters: {
        additionalAmount: (state) => state.additionalAmount,
    },
    mutations: {
        setAdditionalAmount(state, payload) {
            state.additionalAmount = payload
        }
    }
})

export default store