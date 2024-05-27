import classes from './TestCodeInput.module.css';
import { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading';

export default function TestCodeInput() {
	const [testCode, setTestCode] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [isValidTestCode, setIsValidTestCode] = useState(false);

	const handleTestCode = async() => {
		setLoading(true);
		setMessage('');

    await new Promise(resolve => setTimeout(resolve, 1000));

		if(!testCode){
			setMessage('시험코드는 빈 문자열일 수 없습니다.');
			setLoading(false);
			setIsValidTestCode(false);
			return;
		}

		if(testCode !== '1q2w3e4r'){
			setMessage("유효하지 않은 시험코드입니다. 다시 입력해주세요");
			setLoading(false);
			setIsValidTestCode(false);
			return;
		}
		setLoading(false);
		setIsValidTestCode(true);
	}


	return (
		<>
	
			<div className={classes.container}>
				<div className={classes.testCodeBox}>
					<input 
						className={classes.testCode} 
						placeholder='시험코드를 입력해주세요'
						value={testCode}
						onChange={(e) => setTestCode(e.target.value)}
					/>
					<button className={classes.submit_button} onClick={handleTestCode}>시험코드 입력하기</button>
				</div>
				
				{loading && <Loading />}
				{message && <div className={classes.message}>{message}</div>}
			</div>
				
		</>
	)
};
