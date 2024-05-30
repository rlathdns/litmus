import { useSelector } from "react-redux";
import TestList from "../components/Main/TestList/TestList";
import WarningModal from "../components/Modal/WarningModal/WarningModal";

function HomePage({ localDarkMode }) {
  const isNeverSee = useSelector(state => state.neverSee.isNeverSee);

  return (
    <>
      <TestList localDarkMode={localDarkMode} />
      {!isNeverSee && <WarningModal />}
    </>
  );
}

export default HomePage;
