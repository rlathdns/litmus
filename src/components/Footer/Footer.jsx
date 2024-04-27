import classes from './Footer.module.css';
import { useState } from 'react';
import jbnuLogo from '../../assets/Footer/jbnuLogo.png';
import alpsLogo from '../../assets/Footer/alpsLogo.png';

function Footer(){
  const [date, setDate] = useState(new Date());


  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.logoBox}>
          <a href='https://csai.jbnu.ac.kr/csai/index.do'>
            <img className={classes.jbnu_logo} src={jbnuLogo} alt='jbnuLogo'/>
          </a>
          <img className={classes.logo} src={alpsLogo} alt='alpsLogo'/>
        </div>
        <h4>Copyright at JBNU and ALPS, all rights reserved</h4>
      </div>
    </footer>
  )
}

export default Footer;