import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetil from "./VideoDetil";

class App extends React.Component {
    state = {videos:[],selectedVideo:null}

    onTermSubmit = async term =>{
      const response = await youtube.get('/search',{
        params:{
            q:term,
        }
       });
      this.setState({videos:response.data.items})
    }

    onVideoSelect = (video) => {
      this.setState({selectedVideo:video});
    }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetil video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
