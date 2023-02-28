import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import { requestPhotos } from 'services/api';

class App extends Component {
  state = {
    photos: null,
  };

  componentDidMount() {
    const fetchPhotos = async () => {
      const photos = await requestPhotos();
      this.setState({ photos: photos });
    };
    fetchPhotos();
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        <ImageGallery photos={this.state.photos} />
        <Loader />
        <Button />
      </div>
    );
  }
}

export default App;
