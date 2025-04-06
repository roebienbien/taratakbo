import { useSelector } from "react-redux";
import Carousel from "../../../components/ui/carousel/Carousel";
import { RootState } from "../../../store/store.ts";

const TrainingPlan = () => {
	const TrainingPlans = useSelector((state: RootState) => state.trainingPlans)
	return(
		<div className="h-screen flex items-center justify-center">
				<div className="flex flex-col gap-y-4 justify-center">
				<h2 className="text-5xl font-bold w-11/12 mx-auto">Training Plans</h2>
				<div className="flex w-11/12 gap-x-4 mx-auto">
					<Carousel items={TrainingPlans}   />
				</div>
			</div>
		</div>
	)
}

export default TrainingPlan;
