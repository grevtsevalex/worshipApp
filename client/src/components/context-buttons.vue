<template>
  <div class="context-buttons">
    <div class="context-button" @click="addToPlaylist">Добавить в плейлист</div>
    <div class="context-button" @click="deleteSongs">Удалить</div>
    <div class="context-button" @click="cancelHandler">Отмена</div>
  </div>
</template>

<script>
import { addSongs, deleteSongs } from "../api/api-playlist.js";
export default {
  name: 'ContextButtons',
  props: {
    songsIds: {type: Array, require: true},
  },
  methods: {
    cancelHandler() {
      this.$emit('cancel');
    },
    deleteSongs() {
      deleteSongs(this.songsIds);
    },
    addToPlaylist() {
      console.log(this.songsIds);
      addSongs(this.songsIds);
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