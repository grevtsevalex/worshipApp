<template>
<div class="song-component">
  <div class="song-component__head" @click="isOpen = !isOpen">
    <div class="song-component__title">
      {{title}}
    </div>
  </div>
  <div class="song-component__body" :class="{'opened': isOpen}">
    <div class="song-component__text">{{text}}</div>
    <div class="song-component__tags">{{tags}}</div>
  </div>
</div>
</template>

<script>
export default {
  // Идея: Генератор плейлиста
  name: 'Song',
  props: {
    id: {type: String, require: true},
    text: {type: String, require: true},
    title: {type: String, require: true},
    tags: {type: Array, require: true},
    author: {type: String, require: true},
  },
  data() {
    return {
      isOpen: false,
    };
  },
}
</script>

<style>
.song-component__head {
  cursor: pointer;
}
.song-component__body {
  display: none;
}
.song-component__body.opened {
  display: block;
}
</style>