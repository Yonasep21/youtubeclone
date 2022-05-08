import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  // console.log

  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("/ott", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.DATA))
      .catch(error => console.log('error', error));
    }, []);

    return <VideoList videos={videos}/>;
    
  }
    export default App;