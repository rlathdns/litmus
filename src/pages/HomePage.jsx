
import { useSelector } from "react-redux";
import TestList from "../components/Main/TestList/TestList";
import WarningModal from "../components/Modal/WarningModal/WarningModal";


function HomePage() {
  const globalDarkMode = useSelector(state => state.darkMode.darkMode);
  const isNeverSee = useSelector(state => state.neverSee.isNeverSee);


  return (
    <>
      <TestList globalDarkMode={globalDarkMode} />
      {!isNeverSee && <WarningModal />}
    </>
  );
}

export default HomePage;
