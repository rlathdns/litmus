import React, { useEffect } from 'react';
import Split from 'split.js';
import classes from './TestDetail.module.css';

const TestDetail = () => {
  useEffect(() => {
    Split([`.${classes.leftPanel}`, `.${classes.rightPanel}`], {
      sizes: [40, 60],
      minSize: 200,
      gutterSize: 10,
      cursor: 'col-resize',
      gutter: function (index, direction) {
        const gutter = document.createElement('div');
        gutter.className = `gutter gutter-${direction}`;
        return gutter;
      }
    });

    Split([`.${classes.codeEditor}`, `.${classes.resultPanel}`], {
      direction: 'vertical',
      sizes: [50, 50],
      minSize: 100,
      gutterSize: 10,
      cursor: 'row-resize',
      gutter: function (index, direction) {
        const gutter = document.createElement('div');
        gutter.className = `gutter gutter-${direction}`;
        return gutter;
      }
    });
  }, []);

  const resetCode = () => {
    document.querySelector(`.${classes.codeEditor} div[contenteditable="true"]`).innerText = '';
    document.getElementById('result-content').innerText = '';
  };

  const runCode = () => {
    document.getElementById('result-content').innerText = 
      '채점을 시작합니다\n' +
      '테스트 1: 실패\n' +
      '테스트 2: 실패\n' +
      '테스트 3: 실패\n' +
      '테스트 4: 실패\n' +
      '테스트 5: 실패\n' +
      '테스트 6: 실패\n' +
      '채점 결과\n' +
      '합계: 0.0 / 100.0';
  };

  const submitCode = () => {
    let code = document.querySelector(`.${classes.codeEditor} div[contenteditable="true"]`).innerText;
    alert('코드가 제출되었습니다.\n' + code);
    document.getElementById('result-content').innerText = '코드가 채점되었습니다...';
  };

  return (
    <>
      <header className={classes.header}>
        <div>문제 번호: 11055</div>
        <div>제출까지 남은 시간: 01:23:45</div>
        <div>
          <label htmlFor="language">언어 선택: </label>
          <select id="language">
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
          </select>
        </div>
      </header>
      <div className={classes.container}>
        <div className={classes.leftPanel}>
          <h2>가장 큰 증가하는 부분 수열</h2>
          <h3>문제</h3>
          <p>수열 A가 주어졌을 때, 그 수열의 증가하는 부분 수열 중에서 합이 가장 큰 것을 구하는 프로그램을 작성하시오.<br/>
            예를 들어, 수열 A = {1, 100, 2, 50, 60, 3, 5, 6, 7, 8} 인 경우에 합이 가장 큰 증가하는 부분 수열은 A = {1, 100, 2, 50, 60, 3, 5, 6, 7, 8} 이고, 합은 113이다.</p>
          <h3>입력</h3>
          <p>첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000)이 주어진다.<br/>
            둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000)</p>
          <h3>출력</h3>
          <p>첫째 줄에 수열 A의 합이 가장 큰 증가하는 부분 수열의 합을 출력한다.</p>
          <h3>시간 제한</h3>
          <p>1 초</p>
          <h3>메모리 제한</h3>
          <p>256 MB</p>
          <h3>예제 입력</h3>
          <pre>10
1 100 2 50 60 3 5 6 7 8</pre>
          <h3>예제 출력</h3>
          <pre>113</pre>
        </div>
        <div className={classes.rightPanel}>
          <div className={classes.codeEditor}>
            <div className={classes.panelTitle}>Solution</div>
            <div contentEditable="true" style={{height: 'calc(100% - 30px)'}}>
            </div>
          </div>
          <div className={classes.resultPanel}>
            <div className={classes.panelTitle}>실행 결과</div>
            <div id="result-content" style={{height: 'calc(100% - 30px)'}}>
            </div>
          </div>
          <div className={classes.buttonGroup}>
            <button onClick={resetCode}>초기화</button>
            <button onClick={runCode}>코드 실행</button>
            <button onClick={submitCode}>제출 후 채점하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestDetail;
