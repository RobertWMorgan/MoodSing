import axios from "axios"


// API Request to get youtube videos based on currently selected mood
// uses moodSearch as the argument to dynamically fetch videos

async function getVideos (moodSearch) {
    const apiKey = process.env.REACT_APP_YOUTUBE_KEY
    console.log(`${moodSearch} music`)
      try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{
      params: {
        key: apiKey,
        part: "snippet",
        type: "video",
        q: `${moodSearch} music`,
        maxResults: 50,
        videoCategoryId: 10 //music category
      }
    })
    const videoList = response.data.items
    console.log(videoList)
  } catch (error) {
    console.log(error)
  }
}

export default getVideos