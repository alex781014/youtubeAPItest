import axios from 'axios'; 

const KEY = "AIzaSyCJorxD0Am8phF9BBhVRlN8hPHe_0_mJYs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part:'snippet',
    type:'video',
    maxResults:5,
    key:KEY,
  }
});
