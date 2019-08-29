import React from 'react';
import './PlayList.css';
import { TrackList } from '../TrackList/TrackList';

export class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {playlistName: 'New Playlist'};
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange( event ) {
    console.log('-- event', event);
    this.setState({playlistName: event.target.value});
    this.props.onNameChange(event.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          onChange={ this.handleNameChange }
          value={this.state.playlistName}/>
        <TrackList
          isRemoval={ true }
          onRemove={ this.props.onRemove }
          tracks={ this.props.playlistTracks }/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
