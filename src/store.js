import { createStore } from 'vuex'
import postsData from './data/posts.js'

function testFetch(){
    return new Promise((resolve) => setTimeout(resolve ,2000))
}

const store = createStore({
    state(){
        return {
            current: 1,
            posts:[]
        }
    },
    
    mutations: {
        setTestPosts(state, postsData){
            state.posts = postsData
        },
        nextPost(state){
            state.current += 1
        },
        previewsPost(state){
            state.current -= 1
        }
    },

    actions: {  
        async fetchPosts(context){
            testFetch().then(() => {
                context.commit('setTestPosts', postsData)
            })
        },
        goToNextPost(context){
            context.commit('nextPost')
        },
        goToPreviewsPost(context){
            context.commit('previewsPost')
        }
    }
})

export default store