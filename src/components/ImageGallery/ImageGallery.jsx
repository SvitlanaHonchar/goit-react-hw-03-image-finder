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
    const { query, page } = this.props;
    if (prevProps.query !== query) {
      console.log('query changed');
      const fetchPhotos = async () => {
        try {
          this.setState({ isLoading: true });
          const photos = await requestPhotos(query, page);
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

    if (prevProps.page !== page && page !== 1) {
      console.log('page changed');
      const fetchPhotos = async () => {
        try {
          this.setState({ isLoading: true });
          const photos = await requestPhotos(query, page);
          console.log(photos);
          this.setState(prevState => {
            return {
              photos: [...prevState.photos, ...photos],
            };
          });
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
          {(photos !== null && photos.length) === 0 && (
            <i>Nothing found, try to search something else</i>
          )}
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
