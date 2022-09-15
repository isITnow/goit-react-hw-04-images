// import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  return createPortal(
    <div className={s.Overlay} onClick={onCloseModal}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func.isRequired,
};

//////////////////////////////////////

// export class Modal extends Component {
//   static propTypes = {
//     children: PropTypes.node,
//     onCloseModal: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = evt => {
//     if (evt.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { onCloseModal, children } = this.props;
//     return createPortal(
//       <div className={s.Overlay} onClick={onCloseModal}>
//         <div className={s.Modal}>{children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
