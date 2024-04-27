import classes from './TestAmounts.module.css';

function TestAmounts(){
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        아이콘 + 교수 : 숫자   
      </div>

      <div className={classes.wrapper}>
        아이콘 + 학생 : 숫자   
      </div>

      <div className={classes.wrapper}>
        아이콘 + 문제 : 숫자   
      </div>

      <div className={classes.wrapper}>
        아이콘 + 제출 : 숫자   
      </div>
    </div>
  )
}

export default TestAmounts;