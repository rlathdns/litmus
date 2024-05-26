import classes from './TodayExam.module.css';
import Table from 'react-bootstrap/Table';

function TodayExam() {
  return (
		<div className={classes.container}>
			<h3 className={classes.bigTitle}>이번주에 종료되는 시험</h3>
			<Table bordered size="sm" className={classes.table_element}>
				<thead>
					<tr>
						<th>시험시간</th>
						<th>교수님</th>
						<th>시험명</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><span className={classes.emphasize}>2시간 뒤</span></td>
						<td>이경수 교수님</td>
						<td>[자료구조 2분반]스택과 큐</td>
					</tr>
					<tr>
						<td><span className={classes.emphasize}>22시간 뒤</span></td>
						<td>김형기 교수님</td>
						<td>[C++ 5분반] 상속</td>
					</tr>
				</tbody>
			</Table>
		</div>
    
  );
}

export default TodayExam;