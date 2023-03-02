import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
// import { requestPhotos } from 'services/api';

class App extends Component {
  state = {
    query: '',
    photos: null,
    isLoading: false,
    error: null,
  };

  handleFormSubmit = query => {
    // console.log(query);
    this.setState({ query });
  };

  componentDidMount() {
    this.setState({ query: 'popular' });
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.error !== null && (
          <i>An error {this.state.error} occured</i>
        )}

        <ImageGallery query={this.state.query} />

        <Button />
      </div>
    );
  }
}

export default App;
