import {config} from '../config';

const getAllPlaylists = (userId) => 
fetch(`http://localhost:3000/api/v1/playlist/?userId=${userId || config.adminUserId}`)
  .then((res) => res.json())
  .then((res) => res.data)
  .catch(e => console.log(e));

const addSongs = (ids, playlistId) => {
  const body = {
    songs: ids,
    playlistId: playlistId || config.adminPlaylistId
  };

  return fetch('http://localhost:3000/api/v1/playlist/songs', {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
  .then((res) => res.data)
  .catch(e => console.log(e))
};

const deleteSong = (ids, playlistId) => {
  const body = {
    songs: ids,
    playlistId: playlistId || config.adminPlaylistId
  };

  return fetch('http://localhost:3000/api/v1/playlist/songs', {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
  .then((res) => res.data)
  .catch(e => console.log(e))
};

export { getAllPlaylists, addSongs, deleteSong };