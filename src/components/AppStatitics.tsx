const AppStatistics= () => {
  return (
    <div className="flex h-52 justify-evenly bg-blue-600">
      {Statistics.map((statistic, index) => (
        <div key={index} className="flex flex-col items-center justify-center text-white">
          <span className="text-5xl font-bold">{statistic.number}</span>
          <span className="text-lg">{statistic.title}</span>
        </div>
      ))}
    </div>
  );
};

type TStatistic = {
  title: string;
  number: string;
};

const Statistics: TStatistic[] = [
  {
    title: 'Runners',
    number: '1,000+',
  },
  {
    title: 'Routes',
    number: '10',
  },
  {
    title: 'Event Organized',
    number: '100+',
  },
  {
    title: 'Coaches',
    number: '50',
  },
  {
    title: 'Reviews',
    number: '2,000+',
  },
];

export default AppStatistics;
