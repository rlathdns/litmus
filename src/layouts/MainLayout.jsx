
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

import TopNavbar from '../components/TopNavbar/TopNavbar';
import classes from './MainLayout.module.css';


function MainLayout(){
  return (
    <>
      <TopNavbar/>
      <main className={classes.content}>
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </>
  )
}

export default MainLayout;