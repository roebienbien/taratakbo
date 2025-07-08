import AppStatistics from '../../../components/AkyatStatistics.tsx';
import AppPromotion from '../../../components/AppPromotion.tsx';
import TrustedBy from '../../../components/TrustedBy.tsx';
import ValueProposition from '../../../components/ValueProposition.tsx';
import Hero from './Hero.tsx';
import PricePlan from './PricePlan.tsx';
import Reviews from './reviews/Reviews.tsx';
import TrainingPlan from './TrainingPlan.tsx';
import UpcomingEvents from './UpcomingEvents.tsx';
import Workouts from './Workouts.tsx';

const HomePage = () => {
	const components = [Hero, TrustedBy, ValueProposition, TrainingPlan, PricePlan, Workouts, AppPromotion, UpcomingEvents, AppStatistics, Reviews]
  return (
    <div className='flex flex-col'>
			{components.map((Component, index) => (
				<div key={index} className='odd:bg-white even: bg-gray-100'>
						<Component />
				</div>
			))}
    </div>
  );
};
export default HomePage;
