import Table from 'react-bootstrap/Table';
import classes from './ThisWeekExam.module.css';

function ThisWeekExam() {
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
						<td>3일 뒤</td>
						<td>정종욱 교수님</td>
						<td>[HCI 1분반] UCD Process</td>
					</tr>
					<tr>
						<td>5일 뒤</td>
						<td>이경순 교수님</td>
						<td>[자료구조 5분반] 연결리스트</td>
					</tr>
				</tbody>
			</Table>
		</div>
    
  );
}

export default ThisWeekExam;