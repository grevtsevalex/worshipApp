<template>
  <div class="menu-button">
    <img class="menu-button__icon" :src="icon" />
    <span class="menu-button__text">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
};
</script>

<style scoped>
.menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.menu-button__icon {
  width: 25px;
  height: 25px;
}

.menu-button__text {
  margin-top: 4px;
}
.selected {
  color: #fff;
}
</style>
