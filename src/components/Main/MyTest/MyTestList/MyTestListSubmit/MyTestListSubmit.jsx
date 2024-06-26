import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import upArrow from '../../../../../assets/up_arrow.svg'
import downArrow from '../../../../../assets/down_arrow.svg';
import classes from '../MyTestList.module.css';
import { useNavigate } from 'react-router-dom';

const MyTestSubmitList = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const navigate = useNavigate();

  const toggleRow = (rowIndex) => {
    if (expandedRows.includes(rowIndex)) {
      setExpandedRows(expandedRows.filter(index => index !== rowIndex));
    } else {
      setExpandedRows([...expandedRows, rowIndex]);
    }
  };

  const testData = [
    { id: 'A', title: '괄호 판별하기', result: '성공', accuracy: '68.7%', status: '제출', details: [
        { id: '1', category: '성공', source: 'Source', time: '2024-05-07 22:45:10' },
        { id: '2', category: '실패', source: 'Source', time: '2024-05-07 22:25:10' },
        { id: '3', category: '컴파일에러', source: 'Source', time: '2024-05-07 22:15:10' },
      ] },
    { id: 'B', title: '피보나치 함수', result: '실패', accuracy: '58.7%', status: '제출', details: [
        { id: '1', category: '실패', source: 'Source', time: '2024-05-07 22:43:10' },
        { id: '2', category: '실패', source: 'Source', time: '2024-05-07 22:29:10' },
        { id: '3', category: '컴파일에러', source: 'Source', time: '2024-05-07 22:21:10' },
        { id: '4', category: '실패', source: 'Source', time: '2024-05-07 22:18:10' },
        { id: '5', category: '실패', source: 'Source', time: '2024-05-07 22:15:10' },
        { id: '6', category: '실패', source: 'Source', time: '2024-05-07 22:12:10' },
        { id: '7', category: '컴파일에러', source: 'Source', time: '2024-05-07 22:10:10' },
      ] },
    { id: 'C', title: '가장 큰 증가하는 부분 수열', result: '성공', accuracy: '44.179%', status: '제출', details: [
				{ id: '1', category: '성공', source: 'Source', time: '2024-05-30 23:10:10' },
        { id: '2', category: '실패', source: 'Source', time: '2024-05-30 23:05:10' },
		] }
  ];

  return (
    <Table bordered className={classes.table} style={{ borderWidth: '2px' }}>
      <thead>
        <tr>
          <th>문제번호</th>
          <th>제목</th>
          <th>결과</th>
          <th>성공률</th>
          <th>현황</th>
        </tr>
      </thead>
      <tbody>
        {testData.map((test, index) => (
          <React.Fragment key={test.id}>
            <tr>
              <td>{test.id}</td>
              <td><a href='/solving'>{test.title}</a></td>
              <td className={test.result === '성공' ? classes.success : test.result === '실패' ? classes.fail : ''}>{test.result}</td>
              <td><a href='/'>{test.accuracy}</a></td>
              <td>
                <Button
                  variant="link"
                  onClick={() => toggleRow(index)}
                  className={classes.toggleButton}
                >
                  {expandedRows.includes(index) ? <img src={upArrow}/> : <img src={downArrow}/>}
                </Button>
              </td>
            </tr>
            {expandedRows.includes(index) && (
              <tr>
                <td colSpan="5" className={classes.expandedRow}>
                  <Table bordered size="sm" className={classes.innerTable}>
                    <thead>
                      <tr>
                        <th>결과</th>
                        <th>소스</th>
                        <th>제출시간</th>
                      </tr>
                    </thead>
                    <tbody>
                      {test.details.length > 0 ? (
                        test.details.map(detail => (
                          <tr key={detail.id}>
                            <td className={detail.category === '성공' ? classes.success : classes.fail}>{detail.category}</td>
                            <td className={detail.category === '성공' ? classes.success : classes.fail}><a href='/'>{detail.source}</a></td>
                            <td className={detail.category === '성공' ? classes.success : classes.fail}>{detail.time}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3">문제제출기록이 없습니다</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTestSubmitList;
