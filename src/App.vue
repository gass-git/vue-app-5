<script setup>
    import {onMounted} from 'vue' 
    import AppHeader from './components/AppHeader.vue'
    import NavBar from './components/NavBar.vue'
    import {useStore} from 'vuex'

    const store = useStore()

    function handleClick(){
        store.commit('increment', {number: 3})
    }

    function fetchData(){
        store.dispatch('fetchPosts', 'POST')
    }

    onMounted(() => {
        fetchData()
    })

</script>

<template>
    <AppHeader />
    <NavBar />
    <button @click="handleClick">+</button>
    {{ store.state.count }}
    <router-view />
</template>

<style scoped>
</style>