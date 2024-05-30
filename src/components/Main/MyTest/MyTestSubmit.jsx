import Loading from '../../Loading/Loading';
import classes from './MyTest.module.css';
import { useState } from 'react';

import TestCodeInput from "./TestCodeInput/TestCodeInput";
import MyTestSubmitList from './MyTestList/MyTestListSubmit/MyTestListSubmit';


export default function MyTestSubmit() {
	const [visibleMyTest, setVisibleMyTest] = useState(false);

	return (
		<>
			<TestCodeInput setVisibleMyTest={setVisibleMyTest}/>

			{visibleMyTest && <MyTestSubmitList/> }
		</>
	)
};
