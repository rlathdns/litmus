import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; 
import classes from './WarningModal.module.css';
import ThisWeekExam from './ThisWeekExam/ThisWeekExam';
import TodayExam from './TodayExam/TodayExam';
import Divider from '../../Divider/Divider';
import CloseButton from '../../CloseButton/CloseButton';

function WarningModal(){
	const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className={classes.header}>
          <Modal.Title>응시기간에 유의하세요!</Modal.Title>
          <CloseButton/>
        </Modal.Header>
        <Modal.Body className={classes.modal_body}>
					<TodayExam/>

					<Divider/>

					<ThisWeekExam/>
					
				</Modal.Body>
        <Modal.Footer className={classes.right_align}>
					<Form.Check
						type="checkbox"
						label="다시보지 않기"
						className={classes.checkbox_right}
					/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WarningModal;