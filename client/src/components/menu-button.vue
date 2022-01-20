<template>
  <div class="menu-button">
    <img class="menu-button__icon" :src="icon"/>
    <span class="menu-button__text">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
  },
};
</script>

<style scoped>

.menu-button {
  display: flex;
  justify-content: column;
  height: 60px;
  width: 60px;
}
</style>