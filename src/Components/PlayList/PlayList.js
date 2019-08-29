import React from 'react';
import './PlayList.css';
import {TrackList} from '../TrackList/TrackList';

export class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList
          isRemoval={true}
          onRemove={this.props.onRemove}
          tracks={this.props.playlistTracks}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
