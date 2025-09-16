<template>
  <div>
    <h1>Hello world</h1>

    <!-- This works but it shouldn't -->
    <!-- <img src="~/assets/nuxt-logo2.png" alt="Nuxt logo" /> -->

    <!-- This crashes the page but it's supposed to work -->
    <!-- <img src="~/assets/nuxt-logo.png" alt="Nuxt logo" /> -->

    <!-- This works -->
    <img :src="logoUrl" alt="Nuxt logo" />
    <img :src="logoUrl2" alt="Nuxt logo" />
  </div>
</template>

<script setup lang="ts">
import logoUrl from "~/assets/nuxt-logo.png";
import logoUrl2 from "~site/assets/nuxt-logo2.png";
</script>
