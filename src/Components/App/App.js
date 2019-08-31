import React from 'react';
import './background_photo_desktop.jpg';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { PlayList } from '../PlayList/PlayList';

import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      searchResults: [],
      playlistName: 'b9 playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind( this );
    this.removeTrack = this.removeTrack.bind( this );
    this.updatePlaylistName = this.updatePlaylistName.bind( this );
    this.savePlaylist = this.savePlaylist.bind( this );
    this.search = this.search.bind( this );
  }

  updatePlaylistName( name ) {
    this.setState( { playlistName: name } );
  }

  addTrack( track ) {
    if ( this.state.playlistTracks.find( savedTrack => savedTrack.id === track.id ) ) {
      return;
    }

    this.setState( ( state ) => {
      const newList = [ ...state.playlistTracks, track ];
      return { playlistTracks: newList };
    } );
  }

  removeTrack( track ) {
    this.setState( {
      playlistTracks: this.state.playlistTracks.filter(
        ( t ) => {
          return t.id !== track.id
        }
      )
    } );
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map( ( track ) => track.uri );
    Spotify.savePlayList( this.state.playlistName, trackURIs )
      .then( () => {
        this.setState( {
          playlistName: 'New Playlist',
          playlistTracks: []
        })
      } );
  }

  search( term ) {
    console.log( '-- search string ', term );
    Spotify.search( term ).then( searchResults => {
      this.setState( { searchResults: searchResults } );
    } )
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={ this.search }
          />
          <div className="App-playlist">
            <SearchResults
              onAdd={ this.addTrack }
              searchResults={ this.state.searchResults }/>
            <PlayList
              onSave={ this.savePlaylist }
              onNameChange={ this.updatePlaylistName }
              onRemove={ this.removeTrack }
              playlistTracks={ this.state.playlistTracks }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
