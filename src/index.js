import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// components
import SearchBar from './components/search-bar'; 
import VideoList from './components/video-list';
import VideoDetail from './components/video-deatil'; 

const API_KEY = 'AIzaSyC5SUIHUC5iawP5aHsSJZxUxPPFnSDVa20';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo:null 
        };

    this.videoSearch('surfboards');
    } 

    videoSearch(term){
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({ 
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render() {

        const videoSearch= _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
            <div className="container m-t-1">
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <div className="row m-t-1" >
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
