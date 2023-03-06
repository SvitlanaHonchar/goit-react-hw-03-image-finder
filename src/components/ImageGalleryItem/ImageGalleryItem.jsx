import ImgModal from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { photo } = this.props;
    return (
      <>
        {isModalOpen && (
          <ImgModal toggleModal={this.toggleModal}>
            <img src={photo.largeImageURL} alt={photo.tags} />
          </ImgModal>
        )}

        <img
          src={photo.webformatURL}
          alt={photo.tags}
          className={css.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  photo: PropTypes.object,
};
