import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

class ImageGallery extends Component {
  render() {
    const { photos } = this.props;
    return (
      <>
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
