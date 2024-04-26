
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import HeaderBanner from '../components/Header/HeaderBanner';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import classes from './MainLayout.module.css';


function MainLayout(){
  return (
    <>
      <HeaderBanner/>
      <TopNavbar/>
      <main className={classes.content}>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout;