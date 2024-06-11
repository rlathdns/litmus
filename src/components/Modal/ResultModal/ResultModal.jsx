import Modal from 'react-bootstrap/Modal';
import classes from './ResultModal.module.css';
import closeIcon from '../../../assets/closeIcon.svg';

function ResultModal({ result, onClose, show }) {

  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header className={classes.header}>
          <Modal.Title className={classes.title}>결과</Modal.Title>
          <img onClick={onClose} className={classes.closeIcon} src={closeIcon} alt="close" />
        </Modal.Header>
        <Modal.Body className={classes.modal_body}>
          <h2 className={result==='정답입니다' ? classes.correct : classes.wrong}>{result}</h2>
					
        </Modal.Body>
        <Modal.Footer className={classes.right_align}></Modal.Footer>
      </Modal>
    </>
  );
}

export default ResultModal;
