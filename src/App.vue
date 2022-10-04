<script setup>
    import {onMounted, computed} from 'vue' 
    import AppHeader from './components/AppHeader.vue'
    import NavBar from './components/NavBar.vue'
    import {useStore} from 'vuex'

    const store = useStore()
    const posts = computed(() => store.state.posts)

    const currentPost = computed(() => {
        return posts.value.find(
            (post) => post.id === store.state.current
        )
    })

    onMounted(() => {
        store.dispatch('fetchPosts', 'POST')
    })
</script>

<template>
    <AppHeader />
    <NavBar />
    <button @click="handleClick">+</button>

    <section v-if="posts.length > 0">
        <h2>{{ currentPost.title }}</h2>
        <h3>{{ currentPost.content }}</h3>
        <button @click="store.dispatch('goToPreviewsPost')">previews </button>
        <button @click="store.dispatch('goToNextPost')">next </button>
    </section>

    <section v-else>
        <h2>Data loading...</h2>
    </section>

    <router-view />
</template>

<style scoped>
</style>