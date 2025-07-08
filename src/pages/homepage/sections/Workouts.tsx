import { useState } from "react";
import UnsplashImage from "../../../components/UnsplashImage";
import { FaRegClock } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";

const workoutList = [
  {
    id: "easy-run",
    title: "Easy Run",
		photoId: '1559166631-ef208440c75a',
    pace: "Comfortable, conversational pace",
    duration: "20–60 minutes",
    description: "These runs are relaxed and help you build mileage without over-stressing your body."
  },
  {
    id: "tempo-run",
    title: "Tempo Run",
		photoId: '1678964117504-dc77a8b9985a',
    pace: "Comfortably hard, but sustainable pace",
    duration: "20–40 minutes at tempo pace",
    description: "Tempo runs improve your lactate threshold, making it easier to sustain faster paces over time."
  },
  {
    id: "intervals",
    title: "Interval Training",
		photoId: '1616466137547-c3e1d511a033',
    pace: "Faster than race pace",
    duration: "Short repeats (e.g., 400m, 800m) with rest in between",
    description: "Intervals help improve speed and running economy by pushing your limits in short bursts."
  },
  {
    id: "long-run",
    title: "Long Run",
		photoId: '1597892653980-3cec697283fe',
    pace: "Slower than easy pace",
    duration: "60+ minutes",
    description: "Long runs build endurance and aerobic capacity, making them a staple of most training plans."
  },
  {
    id: "hill-repeats",
    title: "Hill Repeats",
		photoId: '1711598850173-0b0a0f69b4f4',
    pace: "Hard effort uphill, jog or walk down",
    duration: "20–30 minutes total",
    description: "Hill repeats strengthen legs, build power, and improve running form."
  } 
];

const Workouts = () => {
  const [activeWorkout, setActiveWorkout] = useState(workoutList[0]);

  return (
    <div className="h-screen flex items-center px-20">
			<div className="w-full flex gap-x-10 justify-center">
				{/* navigation  */}
				<nav className="flex w-2/5 flex-col justify-center gap-4 mb-4">
					<h1 className="text-2xl font-bold mb-4">Different Running Workouts</h1>
					{workoutList.map((workout) => (
						<button
							key={workout.id}
							onClick={() => setActiveWorkout(workout)}
							className="px-4 py-2 border border-gray-400 text-left bg-white rounded hover:bg-gray-100"
						>
							<span className="text-lg font-bold">{workout.title}</span>
							<p>{workout.description}</p>
						</button>
					))}
				</nav>
				{/*Content  */}
				<div className="h-[700px] rounded shadow relative w-3/5 bg-blue-400">
					<UnsplashImage photoId={activeWorkout.photoId} alt={"running-workout"} className="h-full brightness-85 object-top"/>
					<div className="absolute flex flex-col gap-y-6 bottom-0 w-full text-white bg-black/70 p-4">
						<h2 className="text-4xl font-semibold">{activeWorkout.title}</h2>
						<div className="flex flex-col gap-y-2">
							<div className="flex gap-x-2 items-center">
								<FaPersonRunning />
								<span>{activeWorkout.pace}</span>
							</div>
							<div className="flex gap-x-2 items-center">
								<FaRegClock />
								<span>{activeWorkout.duration}</span>
							</div>
						</div>
						{/* <p className="">{activeWorkout.description}</p> */}
					</div>
				</div>
			</div>
    </div>
  );
};

export default Workouts;
