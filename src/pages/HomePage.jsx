import { useEffect } from "react";
import TestList from "../components/Main/TestList/TestList";
import WarningModal from "../components/Modal/WarningModal/WarningModal";
import { useSelector } from "react-redux";

function HomePage() {
  const isNeverSee = useSelector(state => state.neverSee.isNeverSee);

  return (
    <>
      <TestList />
      {!isNeverSee && <WarningModal />}
    </>
  );
}

export default HomePage;
