import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import classes from './MyTestList.module.css';
import { useNavigate } from 'react-router-dom';

const MyTestList = () => {
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
        { id: '1', category: '정답', source: 'Source', time: '2024-05-07 22:45:10' },
        { id: '2', category: '오답', source: 'Source', time: '2024-05-07 22:25:10' },
        { id: '3', category: '컴파일에러', source: 'Source', time: '2024-05-07 22:15:10' },
      ] },
    { id: 'B', title: '피보나치 항수', result: '실패', accuracy: '58.7%', status: '제출', details: [] },
  ];

  return (
    <Table bordered className={classes.table}>
      <thead>
        <tr>
          <th>문제번호</th>
          <th>제목</th>
          <th>결과</th>
          <th>정답률</th>
          <th>현황</th>
        </tr>
      </thead>
      <tbody>
        {testData.map((test, index) => (
          <React.Fragment key={test.id}>
            <tr>
              <td>{test.id}</td>
              <td onClick={()=>{navigate('/solving')}}>{test.title}</td>
              <td className={test.result === '성공' ? classes.success : classes.fail}>{test.result}</td>
              <td>{test.accuracy}</td>
              <td>
                <Button
                  variant="link"
                  onClick={() => toggleRow(index)}
                  className={classes.toggleButton}
                >
                  {expandedRows.includes(index) ? <FaAngleUp /> : <FaAngleDown />}
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
                            <td className={detail.category === '정답' ? classes.success : detail.category === '오답' ? classes.fail : ''}>{detail.category}</td>
                            <td className={detail.category === '정답' ? classes.success : detail.category === '오답' ? classes.fail : ''}>{detail.source}</td>
                            <td className={detail.category === '정답' ? classes.success : detail.category === '오답' ? classes.fail : ''}>{detail.time}</td>
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

export default MyTestList;
