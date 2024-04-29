import TestList from "../components/Main/TestList/TestList";
import TestAmounts from "../components/Main/testAmounts/TestAmounts";
import WarningModal from "../components/Modal/WarningModal";

function HomePage(){
  return (
    <div>
      {/* <TestAmounts/> */}
			<div style={{height : '300px'}}>

			</div>
      <TestList/>
			<WarningModal/>
    </div>
    
  )
}

export default HomePage;