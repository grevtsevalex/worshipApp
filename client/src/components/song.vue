<template>
  <div class="song-component">
    <div class="song-component__head" @click="isOpen = !isOpen">
      <div class="song-component__title">
        {{ title }}
      </div>
    </div>
    <div class="song-component__body" :class="{ opened: isOpen }">
      <div class="song-component__text" v-html="formatedSong"></div>
      <div class="song-component__tags">
        <tag :title="tag" class="song-component__tag"  v-for="tag in tags" :key="tag"></tag>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "./tag.vue";
export default {
  // Идея: Генератор плейлиста
  name: "Song",
  components: { Tag },
  props: {
    id: { type: String, require: true },
    text: { type: String, require: true },
    title: { type: String, require: true },
    tags: { type: Array, require: true },
    author: { type: String, require: true },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    formatedSong() {
      return this.text.replaceAll("\\n", "<br>");
    },
  },
};
</script>

<style>
.song-component__head {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
}
.song-component__title {
  font-weight: bold;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.song-component__body {
  display: none;
  text-align: left;
  margin-top: 15px;
}
.song-component__body.opened {
  display: block;
}

.song-component__tags {
  display: flex;
  margin-top: 10px;
}
.song-component__tag {
  margin-right: 3px;
}
</style>
