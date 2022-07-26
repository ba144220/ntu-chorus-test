<template>
  <header v-if="path !== '/sign-in'" class="sticky t-0 z-50 bg-orange-300">
    <NavBar />
  </header>
  <router-view />
  <footer v-if="path !== '/sign-in'" class="w-full bg-slate-900 text-white p-10">
    <Footer />
  </footer>
</template>

<script setup>
import "./assets/tailwind.css";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const path = computed(() => router.currentRoute.value.path);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
