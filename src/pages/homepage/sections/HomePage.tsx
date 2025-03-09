import AppStatistics from '../../../components/AkyatStatistics.tsx';
import AppPromotion from '../../../components/AppPromotion.tsx';
import TrustedBy from '../../../components/TrustedBy.tsx';
import ValueProposition from '../../../components/ValueProposition.tsx';
import Hero from './Hero.tsx';
import Reviews from './Reviews.tsx';
import UpcomingEvents from './UpcomingEvents.tsx';

const HomePage = () => {
	const components = [Hero,  AppPromotion, ValueProposition, TrustedBy, UpcomingEvents, AppStatistics, Reviews]
  return (
    <div className='flex flex-col'>
			{components.map((Component, index) => (
				<div key={index} className='odd:bg-gray-100 even: bg-gray-200'>
						<Component />
				</div>
			))}
			{/* <Hero /> */}
			{/* <AppStatistics /> */}
			{/* <AppPromotion /> */}
			{/* <ValueProposition /> */}
			{/* <Reviews /> */}
			{/* <TrustedBy /> */}
    </div>
  );
};
export default HomePage;
