import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      searchBarTerm: ''
    };
    this.search = this.search.bind( this );
    this.handleTermChange = this.handleTermChange.bind( this );
  }

  search() {
    this.props.onSearch( this.state.searchBarTerm );
  }

  handleTermChange( event ) {
    this.setState( { searchBarTerm: event.target.value } );
    // this.search();
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"/>
        <button claasName="SearchButton">SEARCH</button>
      </div>
    );
  }
}
