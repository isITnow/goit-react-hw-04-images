// import { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imgUrl, largeImgUrl, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(prevState => (prevState = !isModalOpen));
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={handleToggleModal}
        className={s.ImageGalleryItem__image}
        src={imgUrl}
        alt={tags.split(',')}
      />
      {isModalOpen && (
        <Modal onCloseModal={handleToggleModal}>
          <img src={largeImgUrl} alt={tags.split(',')} />
        </Modal>
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
