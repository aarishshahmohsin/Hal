const axios = require("axios");

async function getPlaylistVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = "PL-IyqTpLTK8n3RLTuClQIOHcwlSK2OhA6";
//   const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=150`;
// const apiUrl = 'https://www.googleapis.com/youtube/v3/search?q=indian+farming+videos&type=video&part=snippet&key=AIzaSyBn8kuqrwLc12_4ijrrcviBPfyfyUsEZYQ'
const apiUrl = 'https://www.googleapis.com/youtube/v3/search?q=indian+farming+videos&type=video&part=snippet&key=AIzaSyBn8kuqrwLc12_4ijrrcviBPfyfyUsEZYQ&maxResults=150'


  try {
    const response = await axios.get(apiUrl);
    console.log(response.data.items);
    const data = response.data;

    console.log(data.items);

    // Extract video information
    const videosData = response.data.items.map(
      (item: { id: { videoId: any; }; snippet: { title: any; thumbnails: { high: { url: any; }; }; }; }) => {
        const videoId = item.id.videoId;
        const title = item.snippet.title;
        const thumbnailUrl = item.snippet.thumbnails.high.url;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        return {
          title: title,
          thumbnailUrl: thumbnailUrl,
          videoUrl: videoUrl,
        };
      }
    );
    return videosData;
  } catch (error) {
    return { error: error };
  }
}

export default getPlaylistVideos;