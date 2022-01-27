<template>
  <div class="menu-button" @click="clickHandler">
    <img class="menu-button__icon" :src="icon" />
    <span class="menu-button__text">{{ title }}</span>
  </div>
</template>

<script>
import router from "../router";

export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    icon: { type: String, required: true },
    url: { type: String, required: true },
  },
  emits: ["buttonSelected"],
  methods: {
    /**
     * Handler of click button.
     */
    clickHandler() {
      this.$emit("buttonSelected", this.id);
      router.push(this.url);
    },
  },
};
</script>

<style>
.menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.menu-button:hover {
  cursor: pointer;
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
