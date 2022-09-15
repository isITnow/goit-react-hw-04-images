import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { onCloseModal, children } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={onCloseModal}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
