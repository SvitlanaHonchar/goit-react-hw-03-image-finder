import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { photos } = this.props;
    return (
      <>
        <ul className={css.ImageGallery}>
          {photos !== null &&
            photos.map(photo => {
              return (
                <li key={photo.id} className={css.ImageGalleryItem}>
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

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};
