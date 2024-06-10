import classes from './TestCodeInput.module.css';
import { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading';
import { updateTestCode } from '../../../../store/testCodeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function TestCodeInput({ setVisibleMyTest }) {
  const testCode = useSelector(state => state.testCode);
  const [myTestCode, setMyTestCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleTestCode = async () => {
    setLoading(true);
    setMessage('');

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!myTestCode) {
      setMessage('시험코드는 빈 문자열일 수 없습니다.');
      setLoading(false);
      setVisibleMyTest(false);
      dispatch(updateTestCode(myTestCode));
      return;
    }

    if (myTestCode !== '1q2w3e4r') {
      setMessage("유효하지 않은 시험코드입니다. 다시 입력해주세요");
      setLoading(false);
      setVisibleMyTest(false);
      dispatch(updateTestCode(myTestCode));
      return;
    }
    setLoading(false);
    setVisibleMyTest(true);
    dispatch(updateTestCode(myTestCode));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleTestCode();
    }
  };

  useEffect(()=>{
    setMyTestCode(testCode.testCode);
    if(testCode.testCode === '1q2w3e4r'){
      setVisibleMyTest(true);
    }
  }, []);

  console.log(testCode.testCode);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.testCodeBox}>
          <input
            className={classes.testCode}
            placeholder='시험코드를 입력해주세요'
            value={myTestCode}
            onChange={(e) => setMyTestCode(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className={classes.submit_button} onClick={handleTestCode}>시험코드 입력하기</button>
        </div>

        {loading && <Loading />}
        {message && <div className={classes.message}>{message}</div>}
      </div>
    </>
  );
}
