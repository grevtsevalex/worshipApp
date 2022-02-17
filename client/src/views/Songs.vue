<template>
  <h1>This is an songs page</h1>
  <div v-if="!isSelectMode" class="select-button" @click="isSelectMode = true">Выбрать</div>
  <div class="songs">
    <div class="songs-item" v-for="song in songs" :key="song._id">
      <span v-if="isSelectMode" :data-song-id="song._id"><input @change="selectSongHandler" :value="song._id" type="checkbox"></span>
      <song
        :id="song._id"
        :text="song.text"
        :title="song.title"
        :tags="song.tags"
        :author="song.author"
      ></song>
    </div>
  </div>
  <context-buttons v-if="isSelectMode" class="songs-context-buttons" @cancel="isSelectMode=false"></context-buttons>
</template>

<script>
import { getAllSongs } from "../api/api-songs.js";
import Song from "@/components/song.vue";
import ContextButtons from "@/components/context-buttons.vue";

export default {
  name: "Songs",
  data() {
    return {
      songs: [],
      isSelectMode: false,
    };
  },
  async created() {
    this.songs = await getAllSongs();
  },
  components: {
    Song,
    ContextButtons,
  },
  methods: {
    selectSongHandler({target}) {
      console.log(target.value);
    },
  },
};
</script>

<style>
.songs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 30px;
  position: relative;
}

.songs-item {
  display: flex;
  padding: 10px 0;
  width: 100%;
  border-bottom: 1.5px solid rgba(163, 163, 163, 0.35);
}

.select-button {
  cursor: pointer;
}

.songs-context-buttons {
  position: fixed;
  width: 100%;
  padding: 0 30px;
  bottom: 100px;
}
</style>
