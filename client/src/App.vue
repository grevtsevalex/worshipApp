<template>
  <Menu class="menu"></Menu>
  <router-view />
</template>

<script>
import Menu from "@/components/menu.vue";

export default {
  component: {
    Menu,
  },
  components: { Menu },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
