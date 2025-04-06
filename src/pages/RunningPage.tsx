import { useParams } from "react-router"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UnsplashImage from "../components/UnsplashImage";


const RunningPage = () => {
	const { runningId } = useParams();

	const trainingPlan = useSelector((state: RootState) => 
		state.trainingPlans.find((plan) => plan.url === runningId)
	)

	if(!trainingPlan){
		return <div className="h-screen flex justify-center items-center text-6xl">Training Plan Not Found</div>
	}

	// destructure once trainingplans exist 
	const {title, distance, planDuration, photoId} = trainingPlan;

	return(
		//pt-16 equals to navbar height
		<div className="pt-16 min-h-screen"> 
			<UnsplashImage photoId={photoId} alt={"running-image"} className="h-[600px] object-top" />
			<div className="px-40 py-10">
				<h1 className="text-4xl">{title} Running Plan </h1>
				<span>{distance}</span>
				<span>{planDuration}</span>
				<p>Running Idea</p>
			</div>
		</div>
	)
}

export default RunningPage
