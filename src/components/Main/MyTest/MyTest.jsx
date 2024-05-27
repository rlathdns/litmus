import Loading from '../../Loading/Loading';
import classes from './MyTest.module.css';
import MyTestList from './MyTestList/MyTestList';
import { useState } from 'react';

import TestCodeInput from "./TestCodeInput/TestCodeInput";


export default function MyTest() {
	const [visibleMyTest, setVisibleMyTest] = useState(false);

	return (
		<>
			<TestCodeInput setVisibleMyTest={setVisibleMyTest}/>

			{visibleMyTest && <MyTestList/> }
		</>
	)
};
