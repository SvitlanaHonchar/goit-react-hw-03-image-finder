import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import { requestPhotos } from 'services/api';

class App extends Component {
  state = {
    photos: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const fetchPhotos = async () => {
      try {
        this.setState({ isLoading: true });

        const photos = await requestPhotos();
        this.setState({ photos: photos });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    };
    fetchPhotos();
  }

  render() {
    return (
      <div
        className="App"
        style={
          {
            // height: '100vh',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // fontSize: 40,
            // color: '#010101',
          }
        }
      >
        <Searchbar />
        {this.state.isLoading && <Loader />}
        {this.state.error !== null && (
          <i>An error {this.state.error} occured</i>
        )}

        <ImageGallery photos={this.state.photos} />
        <Button />
      </div>
    );
  }
}

export default App;
