import axios from "axios";

const KEY = "AIzaSyDuqscDDr9cN_tkjiim5hOLMqvaeOMXZms";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
