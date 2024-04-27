import classes from './TopNavbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';

function TopNavbar() {
  const [isServerOnline, setIsServerOnline] = useState(true);
  const toggleServer = () => {
    setIsServerOnline(!isServerOnline);
  }

  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container className={classes.container}>
        <Navbar.Brand>Litmus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={classes.navbar_content}>
            <Nav.Link>시험목록</Nav.Link>
            <Nav.Link>게시판</Nav.Link>
            <Nav.Link>도움말</Nav.Link>
            <NavDropdown title="내 정보" id="basic-nav-dropdown">
              <NavDropdown.Item>마이페이지</NavDropdown.Item>
              <NavDropdown.Item>내 제출</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                로그아웃
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Stack direction="horizontal" gap={2} onClick={toggleServer}>
        <span>Server Status : </span>
        {isServerOnline ? <Badge bg="success">On</Badge> : <Badge bg="secondary">Off</Badge>}
      </Stack>
    </Navbar>
  );

  
}

export default TopNavbar;