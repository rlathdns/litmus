import { useContext } from 'react';
import { useSelector } from "react-redux";
import TestList from "../components/Main/TestList/TestList";
import WarningModal from "../components/Modal/WarningModal/WarningModal";
import DarkModeContext from '../layouts/DarkModeContext';

function HomePage() {
  const { localDarkMode } = useContext(DarkModeContext); // context에서 localDarkMode 가져오기
  const isNeverSee = useSelector(state => state.neverSee.isNeverSee);

  return (
    <>
      <TestList localDarkMode={localDarkMode} />
      {!isNeverSee && <WarningModal />}
    </>
  );
}

export default HomePage;
