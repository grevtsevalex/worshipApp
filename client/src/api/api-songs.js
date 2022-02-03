const getAllSongs = () =>
  fetch("http://localhost:3000/api/v1/songs")
    .then((res) => res.json())
    .then((res) => res.data);

export { getAllSongs };
