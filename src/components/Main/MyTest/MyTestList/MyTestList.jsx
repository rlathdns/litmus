import React, { useContext, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import upArrow from '../../../../assets/up_arrow.svg';
import downArrow from '../../../../assets/down_arrow.svg';
import classes from './MyTestList.module.css';
import { TestContext } from '../../../../contexts/TestContext';

import downArrow2 from '../../../../assets/down_arrow2.png';

const MyTestList = () => {
  const { testData, setTestData } = useContext(TestContext);
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (rowIndex) => {
    if (expandedRows.includes(rowIndex)) {
      setExpandedRows(expandedRows.filter(index => index !== rowIndex));
    } else {
      setExpandedRows([...expandedRows, rowIndex]);
    }
  };

  console.log(testData);

  return (
    <Table bordered className={classes.table} style={{ borderWidth: '2px' }}>
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
              <td><a href='/solving'>{test.title}</a></td>
              <td className={test.result === '성공' ? classes.success : test.result === '실패' ? classes.fail : ''}>{test.result}</td>
              <td><a href='/'>{test.accuracy}</a></td>
              <td>
                <Button
                  variant="link"
                  onClick={() => toggleRow(index)}
                  className={classes.toggleButton}
                >
                  {expandedRows.includes(index) ? (
										<>
											<img className={classes.rotated} src={downArrow2} />
											<span className={classes.tooltip}>제출목록을 숨깁니다.</span>
										</>
                    
                  ) : (
										<>
											<img src={downArrow2} />
											<span className={classes.tooltip}>제출목록을 펼칩니다.</span>
										</>
                    
                  )}
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
                            <td className={detail.category === '정답' ? classes.success : classes.fail}>{detail.category}</td>
                            <td className={detail.category === '정답' ? classes.success : classes.fail}><a href='/'>{detail.source}</a></td>
                            <td className={detail.category === '정답' ? classes.success : classes.fail}>{detail.time}</td>
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
