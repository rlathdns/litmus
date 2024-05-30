import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, setDarkMode } from '../../../store/darkModeSlice'; // 경로를 맞춰주세요
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './SettingModal.module.css';
import closeIcon from '../../../assets/closeIcon.svg';

function SettingModal({ show, handleClose, localDarkMode, setLocalDarkMode }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    // 모달이 열릴 때 로컬 상태를 Redux 상태로 초기화
    setLocalDarkMode(isDarkMode);
  }, [show, isDarkMode]);

  const handleApply = () => {
    if (localDarkMode !== isDarkMode) {
      dispatch(setDarkMode(localDarkMode));
    }
    handleClose();
  };

  const handleModalClose = () => {
    setLocalDarkMode(isDarkMode); // 모달이 닫힐 때 로컬 상태를 Redux 상태로 초기화
    handleClose();
  };

  useEffect(() => {
    // 로컬 다크 모드 상태가 변경될 때 UI 업데이트
    if (localDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [localDarkMode]);

  useEffect(() => {
    // 실제 다크 모드 상태 변경 시 클래스 업데이트
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

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
                label={localDarkMode ? "ON" : "OFF"}
                checked={localDarkMode}
                onChange={(e) => setLocalDarkMode(e.target.checked)}
                className={localDarkMode ? classes.switch_checked : ""}
              />
            </Form.Group>

            <Form.Group className={classes.form_group}>
              <Form.Label className={classes.label}>언어설정</Form.Label>
              <Form.Control
                as="select"
                value={localDarkMode.language}
                onChange={(e) => setLocalDarkMode({ ...localDarkMode, language: e.target.value })}
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
                label={localDarkMode.colorBlindMode ? "ON" : "OFF"}
                checked={localDarkMode.colorBlindMode}
                onChange={(e) => setLocalDarkMode({ ...localDarkMode, colorBlindMode: e.target.checked })}
                className={localDarkMode.colorBlindMode ? classes.switch_checked : ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={classes.footer}>
          <Button variant="primary" onClick={handleApply}>
            적용
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingModal;
