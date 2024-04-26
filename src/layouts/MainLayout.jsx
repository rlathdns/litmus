
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import HeaderBanner from '../components/Header/HeaderBanner';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import './MainLayout.module.css';

function MainLayout(){
  return (
    <>
      <HeaderBanner/>
      <TopNavbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout;