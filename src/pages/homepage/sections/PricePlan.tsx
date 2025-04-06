import { FaRegCircleCheck, FaUser, FaUserGroup } from "react-icons/fa6";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";

const Prices = [
	{
		title: 'Personal Plan',
		subtitle: 'For you',
		sizeLimitRange: {min: 1, max: 1},
		sizeLimitDescription: 'Individual',
		sizeLimitIcon: FaUser,
		price: 1337,
		features: [
		'Access to 12,000+ top courses',
		'Certification prep',
		'Goal-focused recommendations',
		'AI-powered coding exercises'
		]
	},
	{
		title: 'Team Plan',
		subtitle: 'For you team',
		sizeLimitRange: {min: 2, max: 20},
		sizeLimitDescription: '2 to 20 people',
		sizeLimitIcon: FaUserGroup,
		price: 1337,
		features: [
		'Access to 12,000+ top courses',
		'Certification prep',
		'Goal-focused recommendations',
		'AI-powered coding exercises',
		'AI-powered coding exercises',
		]
	},
	{
		title: 'Organization Plan',
		subtitle: 'For your whole organization',
		sizeLimitRange: {min: 21, max: 100},
		sizeLimitDescription: 'more than 20 people',
		sizeLimitIcon: FaUserGroup,
		price: 1337,
		features: [
		'Access to 12,000+ top courses',
		'Certification prep',
		'Goal-focused recommendations',
		'AI-powered coding exercises',
		'AI-powered coding exercises',
		'AI-powered coding exercises',
		'AI-powered coding exercises',
		'AI-powered coding exercises',
		'AI-powered coding exercises',
		'AI-powered coding exercises',
		]
	},
]


const PricePlan = () => {
	return(
		<div className="h-screen flex items-center bg-white justify-center">
			<div className="w-full px-14">
				<div className="mb-8">
					<h2 className="text-3xl font-bold">Accelerate growth - for you or your running club</h2>
					<span className="text-lg ">Reach goals faster with one of our plans or programs. Try one free today or contact sale to learn more.</span>
				</div>
				<div className="grid grid-cols-3 gap-x-10">
					{Prices.map((price, index) => (
						<div key={index} className="flex rounded-lg bg-white  border relative border-gray-300  overflow-clip shadow-md flex-col">
							<div className=" bg-gradient-to-br from-blue-500 to-blue-700 h-4  absolute inset-x-0 top-0 " />
							{/* Header  */}
							<div className="flex bg-gray-100 py-6 px-4   flex-col gap-y-1">
								<span className="text-xl font-medium">{price.title}</span>
								<span className="text-xs">{price.subtitle}</span>
								<div className="flex text-gray-600 gap-x-2 items-center">
									<price.sizeLimitIcon className="" />
									<span className="text-sm">{price.sizeLimitDescription}</span>
								</div>
							</div>
							<div className="px-4 py-4">
								<span className='font-bold'>Starting at {price.price.toLocaleString()} per month</span>
							</div>
								<PrimaryButton text={'Try it free'} className="text-lg p-2 font-bold w-11/12 mt-2 mx-auto rounded" />
							{/* Features  */}
							<ul className="flex flex-col gap-y-2 p-4">
								{price.features.map((feature, index) => (
									<div key={index} className="flex text-sm gap-x-2 items-center">
										<FaRegCircleCheck className="fill-green-600" />
									 <li>{feature}</li>
									</div>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PricePlan;
