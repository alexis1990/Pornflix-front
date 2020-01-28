import axios from 'axios'; 

/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: "http://localhost:8081/"
});

export default instance; 