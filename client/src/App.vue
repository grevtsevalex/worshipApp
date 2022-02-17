<template>
  <div class="page" data-role="page">
    <router-view />
  </div>
  <Menu class="menu" data-role="menu"></Menu>
</template>

<script>
import Menu from "@/components/menu.vue";

export default {
  component: {
    Menu,
  },
  components: { Menu },
  mounted() {
    document.querySelector('[data-role="page"]').style.height =
      this.pageHeight + "px";
  },
  computed: {
    pageHeight() {
      const menuHeight =
        document.querySelector('[data-role="menu"]').clientHeight;

      return window.innerHeight - menuHeight;
    },
  },
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
* {box-sizing: border-box;}
body {
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.page {
  overflow: overlay;
}
.menu {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
