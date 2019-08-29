import React from 'react';
import './background_photo_desktop.jpg';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { PlayList } from '../PlayList/PlayList';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      searchResults: [
        {
          name: 'Legend',
          artist: 'The Score',
          album: 'ATLAS',
          id: 9
        },
        {
          "id": 10,
          "name": "Lelia",
          "artist": "Allison",
          "album": "SNACKTION"
        },
        {
          "id": 11,
          "name": "Lou",
          "artist": "Scott",
          "album": "FORTEAN"
        },
        {
          "id": 12,
          "name": "Newton",
          "artist": "Hatfield",
          "album": "TINGLES"
        },
        {
          "id": 13,
          "name": "Calhoun",
          "artist": "Dennis",
          "album": "ASSURITY"
        },
        {
          "id": 14,
          "name": "Crawford",
          "artist": "Ingram",
          "album": "ACUMENTOR"
        },
        {
          "id": 15,
          "name": "Fran",
          "artist": "Mcneil",
          "album": "ELPRO"
        },
        {
          "id": 16,
          "name": "Humphrey",
          "artist": "Duncan",
          "album": "KIDSTOCK"
        },
        {
          "id": 17,
          "name": "Louisa",
          "artist": "Tate",
          "album": "VIAGREAT"
        },
        {
          "id": 18,
          "name": "Corinne",
          "artist": "Rowland",
          "album": "EZENTIA"
        }
      ],
      playlistName: 'b9 playlist',
      playlistTracks: [
        {
          "id": 0,
          "name": "Hyde",
          "artist": "King",
          "album": "QUINEX"
        },
        {
          "id": 1,
          "name": "Bolton",
          "artist": "Duke",
          "album": "IMPERIUM"
        },
        {
          "id": 2,
          "name": "Clarke",
          "artist": "Arnold",
          "album": "LIMAGE"
        },
        {
          "id": 3,
          "name": "Crosby",
          "artist": "Bass",
          "album": "BUZZOPIA"
        },
        {
          "id": 4,
          "name": "Hernandez",
          "artist": "Le",
          "album": "PHARMEX"
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    this.setState((state) => {
      return {playlistTracks: state.playlistTracks.push(track)};
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={ this.state.searchResults }/>
            <PlayList playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
