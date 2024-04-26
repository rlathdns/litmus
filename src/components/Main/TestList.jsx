import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import currentTestList from '../../mocks/TestList/currentTestList';
import futureTestList from '../../mocks/TestList/futureTestList';
import pastTestList from '../../mocks/TestList/pastTestList';
import classes from './TestList.module.css';

function TestList(){

  const [tabIndex, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');

  const indexUp = () => {
    if(tabIndex === 2){
      setIndex(0);
      return;
    }
    setIndex(tabIndex + 1);
  };

  const indexDown = () => {
    if (tabIndex === 0){ 
      setIndex(2)
    }
    setIndex(tabIndex -1);
  };

  const emphasizeTime = (currentItemIndex) => {
    if (currentItemIndex < 2) {
      console.log(1);
      return '';
    }
  
    if (currentItemIndex === 2 || currentItemIndex === 3) {
      console.log(3);
      return `${classes.emphasize}`;
    }
  
    if (currentItemIndex === 4) {
      console.log(5);
      return `${classes.more_emphasize}`;
    }
  }
  

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        setData(currentTestList);
        setTitle('진행 중인 시험');
        break;
      case 1:
        setData(futureTestList);
        setTitle('준비 중인 시험');
        break;
      case 2:
        setData(pastTestList);
        setTitle('종료된 시험(최근 5개)');
        break;
    }
  }, [tabIndex]);

  return (
    <section>
      <article className={classes.wrapper}>
        <div className={classes.title}>
          <button 
            className={classes.title_button}
            onClick={indexDown}
          >{`<`}</button>

          <h2 className={classes.title_content}>{title}</h2>

          <button 
            className={classes.title_button}
            onClick={indexUp}
          >{`>`}</button>
        </div>
        <Table striped bordered hover>       
          <thead className={classes.table_head}>
            <tr>
              <th>종료 시간</th>
              <th>교수님</th>
              <th>시험 제목</th>
              <th>시험 코드</th>
            </tr>
          </thead>
          
          <tbody className={classes.table_body}>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td><span className={tabIndex === 0 ? emphasizeTime(idx) : ''}>{item.time}</span></td>
                <td>{item.professor}</td>
                <td>{item.problem}</td>
                <td>{item.testCode}</td>
              </tr>
            ))}
            
          </tbody>
        </Table>
      </article>
    </section>
  )
}

export default TestList;



