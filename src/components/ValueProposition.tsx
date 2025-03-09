import { FaRunning } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";


const Values = [
  {
    title: "Expert Coaching & Personalized Training",
    description:
      "Benefit from structured training plans tailored to your fitness level, helping you achieve your running goals efficiently and safely.",
		icon: FaPeopleGroup 
  },
  {
    title: "Supportive Community & Motivation",
    description:
      "Join a community of like-minded runners, receive guidance, encouragement, and accountability to stay consistent and motivated.",
		icon: FaPeopleGroup 
  },
  {
    title: "Exclusive Events & Performance Tracking",
    description:
      "Get access to exclusive running events, progress tracking tools, and expert insights to continuously improve and challenge yourself.",
		icon: FaRunning 
  },
];

const ValueProposition = () => {
  return (
    <div className="flex items-center h-[400px] justify-center flex-col p-6">
      <h2 className="text-5xl font-bold mb-4">Why Join Us?</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {Values.map((value, index) => (
          <div key={index} className="p-4 items-center gap-y-4 text-center flex flex-col border rounded-lg shadow-sm">
						<value.icon className="text-4xl"/>
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueProposition;
