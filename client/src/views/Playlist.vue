<template>
  <div>
    <h1>This is a playlist page</h1>
  <div class="playlist-songs" v-for="song in songs" :key="song._id">
    <song
      :id="song._id"
      :text="song.text"
      :title="song.title"
      :tags="song.tags"
      :author="song.author"
    ></song>
  </div>
  </div>
</template>

<script>
import { getAllPlaylists } from "../api/api-playlist.js";
import Song from "@/components/song.vue";

export default {
  name: "Playlists",
  components: {Song},
  data() {
    return {
      playlists: [],
    };
  },
  async created() {
    this.playlists = await getAllPlaylists();
  },
  computed: {
    songs() {
      if (!this.playlists.length) return [];
      return this.playlists[0].songs;
    },
  },
};
</script>