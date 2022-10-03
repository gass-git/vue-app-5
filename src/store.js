import { createStore } from 'vuex'

function fakeFetch(){
    return new Promise((resolve) => setTimeout(resolve ,2000))
}

const store = createStore({
    state(){
        return {
            count: 0
        }
    },
    
    mutations: {
        increment(state, payload){
            state.count += payload.number
        }
    },

    actions: {  
        async fetchPosts(){
            fakeFetch().then(() => console.log('fetch completed'))
        }
    }
})

export default store