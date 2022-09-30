<script setup>
    import posts from '../../data/posts.js'
</script>

<template>
    <h1>
        this is posts page
    </h1>
    <ul>
        <li v-for="post in posts" v-bind:key="post.id">
            <router-link v-bind:to="`/posts/${post.id}`">
                {{ post.title }}
            </router-link>
        </li>
    </ul>
    <router-view />
</template>

<style scoped>
</style>