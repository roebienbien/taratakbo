import { SiAdidas, SiNewbalance, SiNike, SiPuma, SiReebok } from "react-icons/si";

const Clients = [
	{
		title: 'Nike',
		icon: SiNike,
	},
	{
		title: 'New Balance',
		icon: SiNewbalance,
	},
	{
		title: 'Adidas',
		icon: SiAdidas,
	},
	{
		title: 'Puma',
		icon: SiPuma,
	},
	{
		title: 'Reebok',
		icon: SiReebok,
	},
]

const TrustedBy = () => {

	return(
		<div className="h-40  flex flex-col items-center justify-center">
			<span className="text-sm">Trusted by well-trusted Companies</span>
			<div className="flex justify-center gap-x-20">
				{Clients.map((client, index) => (
					<div key={index}>
						<client.icon className="text-8xl fill-gray-400"/>
					</div>
				))}				 
			</div>
		</div>
	)
}

export default TrustedBy;
