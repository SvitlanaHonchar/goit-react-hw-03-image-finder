import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { requestPhotos } from 'services/api';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    photos: null,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      console.log('query changed');
      const fetchPhotos = async () => {
        try {
          this.setState({ isLoading: true });
          // console.log('this.props.query:', this.props.query);
          const photos = await requestPhotos(this.props.query);
          console.log(photos);
          this.setState({ photos });
        } catch (error) {
          this.setState({ error: error.message });
        } finally {
          this.setState({ isLoading: false });
        }
      };
      fetchPhotos();
    }
  }

  render() {
    const { photos } = this.state;
    return (
      <>
        {this.state.isLoading && <Loader />}
        <ul className="ImageGallery">
          {photos !== null &&
            photos.map(photo => {
              return (
                <li key={photo.id} className="ImageGalleryItem">
                  <ImageGalleryItem photo={photo} />
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
