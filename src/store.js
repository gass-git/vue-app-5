import { createStore } from 'vuex'
import postsData from './data/posts.js'

function testFetch(){
    return new Promise((resolve) => setTimeout(resolve ,2000))
}

const posts = {
    namespaced: true,

    state(){
        return {
            currentId: 1,
            data:[]
        }
    },
    
    mutations: {
        setData(state, postsData){
            state.data = postsData
        },
        goTo(state, direction){
            if(direction === 'next') state.currentId += 1
            else if(direction === 'previews') state.currentId -= 1
        }
    },

    actions: {  
        async fetchPosts(context){
            testFetch().then(() => {
                context.commit('setData', postsData)
            })
        },
        goToNext(context){
            context.commit('goTo', 'next')
        },
        goToPreviews(context){
            context.commit('goTo', 'previews')
        }
    },

    getters: {
        currentPost(state){
            return state.data.find((post) => post.id === state.currentId)
        },
        postById(state){
            return (
                function(id){
                    return state.data.find((post) => post.id === id)
                }
            )
        }        
    }
}

const store = createStore({
    modules:{
        posts
    }
})

export default store