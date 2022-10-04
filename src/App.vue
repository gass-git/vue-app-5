<script setup>
    import {onMounted, computed} from 'vue' 
    import {useStore} from 'vuex'

    const store = useStore()
    const posts = computed(() => store.state.posts.data)

    const currentPost = computed(() => store.getters['posts/currentPost'])
    const somePost = computed(() => store.getters['posts/postById'](2))

    onMounted(() => {
        store.dispatch('posts/fetchPosts')
    })
</script>

<template>

    <section v-if="posts.length > 0">
        <h2>{{ currentPost.title }}</h2>
        <h3>{{ currentPost.content }}</h3>
        <h3>{{ somePost.title }}</h3>
        <button @click="store.dispatch('posts/goToPreviews')">previews </button>
        <button @click="store.dispatch('posts/goToNext')">next </button>
    </section>

    <section v-else>
        <h2>Data loading...</h2>
    </section>

    <router-view />
</template>

<style scoped>
</style>