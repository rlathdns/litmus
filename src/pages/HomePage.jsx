import { useContext } from 'react';
import { useSelector } from "react-redux";
import TestList from "../components/Main/TestList/TestList";
import WarningModal from "../components/Modal/WarningModal/WarningModal";
import DarkModeContext from '../contexts/DarkModeContext'; // Context import

function HomePage() {
  const { localDarkMode } = useContext(DarkModeContext); // Context에서 localDarkMode 가져오기
  const isNeverSee = useSelector(state => state.neverSee.isNeverSee);

  console.log('homepage : ', localDarkMode);

  return (
    <>
      <TestList localDarkMode={localDarkMode} />
      {!isNeverSee && <WarningModal />}
    </>
  );
}

export default HomePage;
