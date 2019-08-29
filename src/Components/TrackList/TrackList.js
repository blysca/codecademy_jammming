import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map( trackItem =>
            <Track key={trackItem.id} track={trackItem}/>
        )}

      </div>
    );
  }
}
