import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNeverSee } from '../../../store/neverSeeSlice';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import classes from './WarningModal.module.css';
import ThisWeekExam from './ThisWeekExam/ThisWeekExam';
import TodayExam from './TodayExam/TodayExam';
import Divider from '../../Divider/Divider';
import closeIcon from '../../../assets/closeIcon.svg';

function WarningModal() {
  const dispatch = useDispatch();
  const isNeverSee = useSelector(state => state.neverSee.isNeverSee);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isNeverSee) {
      setShow(false);
    }
  }, [isNeverSee]);

  const handleClose = () => setShow(false);

  const handleCheck = () => {
    dispatch(toggleNeverSee());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className={classes.header}>
          <Modal.Title className={classes.title}>응시기간에 유의하세요!</Modal.Title>
          <img onClick={handleClose} className={classes.closeIcon} src={closeIcon} alt="close" />
        </Modal.Header>
        <Modal.Body className={classes.modal_body}>
          <TodayExam />
          <Divider />
          <ThisWeekExam />
        </Modal.Body>
        <Modal.Footer className={classes.right_align}>
          <Form.Check
            type="checkbox"
            label="다시보지 않기"
            className={classes.checkbox_right}
            onClick={handleCheck}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WarningModal;
