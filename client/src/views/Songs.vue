<template>
  <h1>This is an songs page</h1>
  <div class="songs" v-for="song in songs" :key="song._id">
    <song
    :id="song._id"
    :text="song.text"
    :title="song.title"
    :tags="song.tags"
    :author="song.author"
    ></song>
  </div>
</template>

<script>
import { getAllSongs } from "../api/api-songs.js";
import Song from "@/components/song.vue";

export default {
  name: "Songs",
  data() {
    return {
      songs: [],
    };
  },
  async created() {
    this.songs = await getAllSongs();
  },
  components: {
    Song,
  },
};
</script>
