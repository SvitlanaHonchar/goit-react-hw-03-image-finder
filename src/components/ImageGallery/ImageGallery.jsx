import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

class ImageGallery extends Component {
  render() {
    const { photos } = this.props;
    return (
      <div>
        <ul>
          {photos !== null &&
            photos.map(photo => {
              return (
                <li key={photo.id}>
                  <ImageGalleryItem photo={photo} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
