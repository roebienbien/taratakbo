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
		<div className="min-h-40">
			<div className="flex py-8 items-center justify-center flex-col">
				<span className="text-lg text-gray-800">Trusted by 100+ companies worldwide.</span>
				<div className="flex justify-center gap-x-20">
					{Clients.map((client, index) => (
						<div key={index}>
							<client.icon className="text-8xl fill-gray-400"/>
						</div>
					))}				 
				</div>
			</div>
		</div>
	)
}

export default TrustedBy;
