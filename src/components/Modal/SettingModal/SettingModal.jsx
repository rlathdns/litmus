import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, setDarkMode } from '../../../store/darkModeSlice'; // 경로를 맞춰주세요
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import classes from './SettingModal.module.css';
import closeIcon from '../../../assets/closeIcon.svg';

function SettingModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleModalClose = () => {
    handleClose();
  };

  useEffect(() => {
    // 실제 다크 모드 상태 변경 시 클래스 업데이트
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  console.log(isDarkMode);

  return (
    <>
      <Modal show={show} onHide={handleModalClose} centered>
        <Modal.Header className={classes.header}>
          <Modal.Title>설정</Modal.Title>
          <img onClick={handleModalClose} className={classes.closeIcon} src={closeIcon} alt="close" />
        </Modal.Header>
        <Modal.Body className={classes.modal_body}>
          <Form>
            <Form.Group className={classes.form_group}>
              <Form.Label className={classes.label}>다크모드</Form.Label>
              <Form.Check
                type="switch"
                id="dark-mode-switch"
                label={isDarkMode ? "ON" : "OFF"}
                checked={isDarkMode}
                onChange={(e) => dispatch(toggleDarkMode())}
                className={isDarkMode ? classes.switch_checked : ""}
              />
            </Form.Group>

            <Form.Group className={classes.form_group}>
              <Form.Label className={classes.label}>언어설정</Form.Label>
              <Form.Control
                as="select"
                value={isDarkMode.language}
                onChange={(e) => setisDarkMode({ ...isDarkMode, language: e.target.value })}
                className={classes.custom_select}
              >
                <option>한국어</option>
                <option>영어</option>
                <option>일본어</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className={classes.form_group}>
              <Form.Label className={classes.label}>색약모드</Form.Label>
              <Form.Check
                type="switch"
                id="color-blind-mode-switch"
                label={isDarkMode.colorBlindMode ? "ON" : "OFF"}
                checked={isDarkMode.colorBlindMode}
                onChange={() => {}}
                className={isDarkMode.colorBlindMode ? classes.switch_checked : ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={classes.footer}>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingModal;
