import axios from "axios";

const KEY = "AIzaSyANlDbD-5Z8Cd6dqh8dr2Lec1aDPesX5IA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
