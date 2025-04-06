import { useParams } from "react-router";

const WorkoutDetail = () => {
	const {workoutId} = useParams();
	return(
		<div>
			<h3>{workoutId}</h3>	
		</div>
	)
}
export default WorkoutDetail;
