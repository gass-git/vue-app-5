<script setup>
    import posts from '../../data/posts.js'
    import {useRoute} from 'vue-router'
    import {watchEffect, ref, onMounted} from 'vue'

    const route = useRoute()
    const iniPostId = 1
    const postId = ref(iniPostId)
    const currentPost = ref({})

    onMounted(() => {
        currentPost.value = posts.find((post) => post.id === postId.value)
    })

    watchEffect(() => {
        postId.value = Number(route.params.id)
        currentPost.value = posts.find((post) => post.id === postId.value)
    })
</script>

<template>
    <h2>{{ currentPost.title }}</h2>
    <p>{{ currentPost.content }}</p>
</template>

<style scoped>
</style>

