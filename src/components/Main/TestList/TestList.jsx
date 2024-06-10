import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { useState, useEffect, } from 'react';
import currentTestList from '../../../mocks/TestList/currentTestList';
import futureTestList from '../../../mocks/TestList/futureTestList';
import pastTestList from '../../../mocks/TestList/pastTestList';
import classes from './TestList.module.css';

function TestList() {
 
  const darkMode = useSelector(state => state.darkMode.isDarkMode);

  const [tabIndex, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');

  console.log(darkMode);

  const indexUp = () => {
    if (tabIndex === 2) {
      setIndex(0);
      return;
    }
    setIndex(tabIndex + 1);
  };

  const indexDown = () => {
    if (tabIndex === 0) {
      setIndex(2);
      return;
    }
    setIndex(tabIndex - 1);
  };

  const emphasizeTime = (currentItemIndex) => {
    if (currentItemIndex < 2) {
      return '';
    }

    if (currentItemIndex === 2 || currentItemIndex === 3) {
      return `${classes.emphasize}`;
    }

    if (currentItemIndex === 4) {
      return `${classes.more_emphasize}`;
    }
  };

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
    <section className={darkMode ? `${classes.wrapper} dark-mode` : classes.wrapper}>
      <article className={classes.wrapper}>
        <div className={darkMode ? classes.dark_title : classes.title}>
          <button
            className={darkMode ? classes.dark_title_button : classes.title_button}
            onClick={indexDown}
          >이전 시험</button>

          <h2 className={darkMode ? classes.dark_title_content : classes.title_content}>{title}</h2>

          <button
            className={darkMode ? classes.dark_title_button : classes.title_button}
            onClick={indexUp}
          >예정 시험</button>
        </div>
        <Table bordered hover className={darkMode ? 'table-dark' : ''}>
          <thead className={darkMode ? classes.dark_table_head : classes.table_head}>
            <tr>
              <th>종료 시간</th>
              <th>교수님</th>
              <th>시험 제목</th>
              <th>시험 코드</th>
            </tr>
          </thead>

          <tbody className={darkMode ? classes.dark_table_body : classes.table_body}>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td><span className={tabIndex === 0 ? emphasizeTime(idx) : ''}>{item.time}</span></td>
                <td>{item.professor}</td>
                <td><a href='/myTest'>{item.problem}</a></td>
                <td>{item.testCode}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </article>
    </section>
  );
}

export default TestList;
