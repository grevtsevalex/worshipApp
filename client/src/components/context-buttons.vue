<template>
  <div class="context-buttons">
    <div class="context-button">Добавить в плейлист</div>
    <div class="context-button">Удалить</div>
    <div class="context-button" @click="cancelHandler">Отмена</div>
  </div>
</template>

<script>
export default {
  name: 'ContextButtons',
  methods: {
    cancelHandler() {
      this.$emit('cancel');
    },
  },
}
</script>

<style>
.context-buttons {
  display: flex;
  justify-content: space-between;
}
.context-button {
  background-color: #c277e050;
  padding: 10px 20px;
  line-height: 16px;
  width: max-content;
  border-radius: 20px;
  cursor: pointer;
}
</style>