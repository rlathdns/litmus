import React, { useEffect, useRef } from 'react';
import './TestDetail.css';

const TestDetail = () => {
  const editorRef = useRef(null);
  const editorInstance = useRef(null);

  useEffect(() => {
    // Ensure the elements are rendered before initializing Split.js
    if (document.querySelector('.left-panel') && document.querySelector('.right-panel')) {
      window.Split(['.left-panel', '.right-panel'], {
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
    }

    if (document.querySelector('.code-editor') && document.querySelector('.result-panel')) {
      window.Split(['.code-editor', '.result-panel'], {
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
    }

    editorInstance.current = window.CodeMirror.fromTextArea(editorRef.current, {
      lineNumbers: true,
      mode: 'python', // Default mode
      theme: 'eclipse',
      viewportMargin: Infinity // Ensures the editor fills its container
    });

    const languageSelector = document.getElementById('language');
    const handleLanguageChange = () => {
      const mode = languageSelector.value;
      if (mode === 'python') {
        editorInstance.current.setOption('mode', 'python');
      } else if (mode === 'javascript') {
        editorInstance.current.setOption('mode', 'javascript');
      } else if (mode === 'cpp') {
        editorInstance.current.setOption('mode', 'text/x-c++src');
      } else if (mode === 'c') {
        editorInstance.current.setOption('mode', 'text/x-csrc');
      }
    };
    languageSelector.addEventListener('change', handleLanguageChange);

    return () => {
      languageSelector.removeEventListener('change', handleLanguageChange);
    };
  }, []);

  const resetCode = () => {
    editorInstance.current.setValue('');
    document.getElementById('result-content').innerText = '';
  };

  const runCode = () => {
    document.getElementById('result-content').innerText = 
      '테스트 1 〉성공\n\n' +
      '테스트 결과 (~˘▾˘)~\n' +
      '1개 중 1개 성공\n\n' +
      '채점 결과\n' +
      '합계: 100.0 / 100.0\n';
  };

  const submitCode = () => {
    const code = editorInstance.current.getValue();
    alert('틀렸습니다.\n');
    document.getElementById('result-content').innerText = '코드가 채점되었습니다...';
  };

  return (
    <div>
      <header className='header'>
        <div>11055번</div>
        <div>제출까지 남은 시간: 01:23:45</div>
        <div>
          <label htmlFor="language">언어 선택 </label>
          <select id="language">
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
          </select>
        </div>
      </header>
      <div className="main-container">
        <div className="left-panel">
          <div className="container">
            <div className="header-container">
              <h1 className='h1'>가장 큰 증가하는 부분 수열</h1>
            </div>
            <div className="stats stats-header">
              <strong className="stats-item">시간 제한</strong>
              <strong className="stats-item">메모리 제한</strong>
              <strong className="stats-item">제출</strong>
              <strong className="stats-item">정답</strong>
              <strong className="stats-item">맞힌 사람</strong>
              <strong className="stats-item">정답 비율</strong>
            </div>
            <div className="stats">
              <div className="stats-item">1 초</div>
              <div className="stats-item">236 MB</div>
              <div className="stats-item">55202</div>
              <div className="stats-item">24692</div>
              <div className="stats-item">19639</div>
              <div className="stats-item">44.179%</div>
            </div>
            <div className="problem">
              <h2 className='h2'>문제</h2>
              <p>수열 A가 주어졌을 때, 그 수열의 증가하는 부분 수열 중에서 합이 가장 큰 것을 구하는 프로그램을 작성하시오.</p>
              <p>예를 들어, 수열 A = &#123;1, 100, 2, 50, 60, 3, 5, 6, 7, 8&#125; 인 경우에 합이 가장 큰 증가하는 부분 수열은 A = &#123;1, 100, 2, 50, 60, 3, 5, 6, 7, 8&#125; 이고, 합은 113이다.</p>
            </div>
            <div className="input">
              <h2 className='h2'>입력</h2>
              <p>첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000)이 주어진다.</p>
              <p>둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000)</p>
            </div>
            <div className="output">
              <h2 className='h2'>출력</h2>
              <p>첫째 줄에 수열 A의 합이 가장 큰 증가하는 부분 수열의 합을 출력한다.</p>
            </div>
            <div className="example">
              <h3 className='h3'>예제 입력 1</h3>
              <pre>10
1 100 2 50 60 3 5 6 7 8</pre>
              <h3 className='h3'>예제 출력 1</h3>
              <pre>113</pre>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="panel-title">Solution</div>
          <div className="code-editor">
            <textarea id="codeEditor" ref={editorRef} className="editor"></textarea>
          </div>
          <div className="result-panel">
            <div className="panel-title">실행 결과</div>
            <div id="result-content">
              실행 결과가 여기에 표시됩니다.
            </div>
          </div>
          <div className="button-group">
            <button onClick={resetCode}>초기화
              {/* <div className="tooltip">코드를 초기화합니다.</div> */}
            </button>
            <button onClick={runCode}>코드 실행
              {/* <div className="tooltip">코드를 실행합니다.</div> */}
            </button>
            <button className="submit-button" onClick={submitCode}>제출 후 채점하기
              {/* <div className="tooltip">코드를 제출하고 채점합니다.</div> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetail;
