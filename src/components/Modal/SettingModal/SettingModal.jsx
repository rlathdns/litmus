import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import classes from './SettingModal.module.css';
import Divider from '../../Divider/Divider';

function SettingModal({ show, handleClose }){
  const [darkMode, setDarkMode] = useState(false);
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [language, setLanguage] = useState('한국어');

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>설정</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.modal_body}>
          <Form>
            <Form.Group className={classes.form_group}>
              <Form.Label className={classes.label}>다크모드</Form.Label>
              <Form.Check 
                type="switch"
                id="dark-mode-switch"
                label={darkMode ? "ON" : "OFF"}
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className={darkMode ? classes.switch_checked : ""}
              />
            </Form.Group>
           
            <Form.Group className={classes.form_group}>
              <Form.Label className={classes.label}>언어설정</Form.Label>
              <Form.Control 
                as="select" 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
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
                label={colorBlindMode ? "ON" : "OFF"}
                checked={colorBlindMode}
                onChange={(e) => setColorBlindMode(e.target.checked)}
                className={colorBlindMode ? classes.switch_checked : ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            적용
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingModal;
