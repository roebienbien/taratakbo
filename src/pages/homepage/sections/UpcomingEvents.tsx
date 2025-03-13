import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router";
const UpcomingEvents = () => {
	const Events = [
		{
			region: 'Luzon',
			run: [
				{
					title: 'Takbong Tagaytay 2025',
					participants: 4752
				},
				{
					title: 'Manila Midnight Run 2025',
					participants: 4752
				},
				{
					title: 'Padyak at Takbo sa Banaue 2025',
					participants: 5024
				}
			]	
		},
		{
			region: 'Visayas',
			run: [
				{
					title: 'Dalagan sa Cebu 2025',
					participants: 4752
				},
				{
					title: 'Ilonggo Baybay Run 2025',
					participants: 4752
				},
				{
					title: 'Bugsay-Takbo sa Bohol 2025',
					participants: 4752
				}
			]	
		},
		{
			region: 'Mindanao',
			run: [
				{
					title: 'Takbong Durian sa Davao 2025',
					participants: 4752
				},
				{
					title: 'Kadayawan Fun Run 2025',
					participants: 4752
				},
				{
					title: 'Habulan sa Zamboanga',
					participants: 4752
				}
			]	
		},
	]
	return(
		<div className="px-14 flex flex-col  justify-center h-[400px]">
			<h3 className="text-4xl border-b border-gray-400 font-bold pb-4">Upcoming Events</h3>
			<div className="grid grid-cols-4 mt-8">
					<div className="flex flex-col gap-y-10 max-w-[300px]">
					<span className="text-4xl font-semibold">
						First Quarter of 2025
					</span>
					<div className="flex gap-x-2 items-center text-blue-600">
						<Link to={'/'}>See all upcoming running events </Link>
						<FaChevronRight className="text-xs"/>
					</div>
				</div>	
				{Events.map((event, index) => (
					<div key={index} className="flex flex-col gap-y-2">
						<span className="text-3xl font-semibold">{event.region}</span>
						{event.run.map((run, index) => (
							<div key={index} className="flex flex-col">
								<div className="flex gap-x-1 items-center text-blue-600">
									<Link to={'/'} className="text-lg">{run?.title}</Link>	
									<FaChevronRight className="text-xs"/>
								</div>
								<span className="text-gray-600 text-xs">{run?.participants.toLocaleString()} runners</span>	
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}
export default UpcomingEvents;
