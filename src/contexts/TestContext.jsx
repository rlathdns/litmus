import React, { createContext, useState } from 'react';

const TestContext = createContext();

const TestProvider = ({ children }) => {
  const [testData, setTestData] = useState([
    { id: 'A', title: '괄호 판별하기', result: '성공', accuracy: '68.7%', status: '제출', details: [
        { id: '1', category: '정답', source: 'Source', time: '2024-05-07 22:45:10' },
        { id: '2', category: '오답', source: 'Source', time: '2024-05-07 22:25:10' },
        { id: '3', category: '컴파일에러', source: 'Source', time: '2024-05-07 22:15:10' },
      ] },
    { id: 'B', title: '피보나치 함수', result: '실패', accuracy: '58.7%', status: '제출', details: [
        { id: '1', category: '오답', source: 'Source', time: '2024-05-07 22:43:10' },
        { id: '2', category: '오답', source: 'Source', time: '2024-05-07 22:29:10' },
        { id: '3', category: '컴파일에러', source: 'Source', time: '2024-05-07 22:21:10' },
        { id: '4', category: '오답', source: 'Source', time: '2024-05-07 22:18:10' },
        { id: '5', category: '오답', source: 'Source', time: '2024-05-07 22:15:10' },
        { id: '6', category: '오답', source: 'Source', time: '2024-05-07 22:12:10' },
        { id: '7', category: '컴파일에러', source: 'Source', time: '2024-05-07 22:10:10' },
      ] },
    { id: 'C', title: '가장 큰 증가하는 부분 수열', result: '미제출', accuracy: '44.179%', status: '제출', details: [] }
  ]);

  return (
    <TestContext.Provider value={{ testData, setTestData }}>
      {children}
    </TestContext.Provider>
  );
};

export { TestContext, TestProvider };
