<template>
    <div>
      <h1>Espectáculos</h1>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/espectaculos/${article.slug}`">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $content }) {
      const articles = await $content('espectaculos').fetch();
      return { articles };
    }
  }
  </script>
  