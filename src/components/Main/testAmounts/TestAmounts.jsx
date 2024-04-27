import classes from './TestAmounts.module.css';
import professor from '../../../assets/Main/TestAmounts/professor.png';
import student from '../../../assets/Main/TestAmounts/student.png';
import problem from '../../../assets/Main/TestAmounts/problem.png';
import submit from '../../../assets/Main/TestAmounts/submit.png';


function TestAmounts(){
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <img className={classes.icon} src={professor} alt='professor_icon'/>
          <h4 className={classes.title_name}>교수님 : </h4>
        </div>
        <p className={classes.number}>82</p> 
      </div>

      <div className={classes.wrapper}>
        <div className={classes.title}>
          <img className={classes.icon} src={student} alt='student_icon'/>
          <h4 className={classes.title_name}>학생 : </h4>
        </div>
        <p className={classes.number}>4988</p> 
      </div>

      <div className={classes.wrapper}>
        <div className={classes.title}>
          <img className={classes.icon} src={problem} alt='problem_icon'/>
          <h4 className={classes.title_name}>문제 : </h4>
        </div>
        <p className={classes.number}>1593</p>   
      </div>

      <div className={classes.wrapper}>
        <div className={classes.title}>
          <img className={classes.icon} src={submit} alt='submit_icon'/>
          <h4 className={classes.title_name}>제출 : </h4>
        </div>
        <p className={classes.number}>389823</p> 
      </div>
    </div>
  )
}

export default TestAmounts;