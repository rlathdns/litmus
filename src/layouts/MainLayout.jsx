import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import classes from './MainLayout.module.css';

function MainLayout() {
  const globalDarkMode = useSelector(state => state.darkMode.isDarkMode);
  const [localDarkMode, setLocalDarkMode] = useState(globalDarkMode);

  useEffect(() => {
    setLocalDarkMode(globalDarkMode);
  }, [globalDarkMode]);

  return (
    <>
      <TopNavbar localDarkMode={localDarkMode} setLocalDarkMode={setLocalDarkMode} />
      <main className={localDarkMode ? `${classes.content} dark-mode` : classes.content}>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default MainLayout;
