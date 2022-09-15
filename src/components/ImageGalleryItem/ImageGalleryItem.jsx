import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    largeImgUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { imgUrl, largeImgUrl, tags } = this.props;
    const { isModalOpen } = this.state;
    const { handleToggleModal } = this;

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
  }
}
