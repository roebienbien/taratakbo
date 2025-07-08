import UnsplashImage from '../../../../components/UnsplashImage';
import ReviewCard from './ReviewCard';

export type TReview = {
  username: string;
  event: string;
  comment: string;
  profilePicture: string;
  className?: string;
  isFeatured?: boolean;
};

const ReviewsList: TReview[] = [
  {
    username: 'Kelvin Kiput',
    event: 'Milo Marathon Manila Leg 2025',
    className: 'col-span-2 row-span-2',
    comment: 'Pulvinar nulla enim nullam suspendisse. Nunc sapien, nunc condimentum proin. Et id sit congue odio.',
    profilePicture: '1564564321837-a57b7070ac4f',
    isFeatured: true,
  },
  {
    username: 'Kelvin Kiput',
    event: 'Milo Marathon Manila Leg 2025',
    comment: 'Pulvinar nulla enim nullam suspendisse. Nunc sapien, nunc condimentum proin. Et id sit congue odio.',
    profilePicture: '1564564321837-a57b7070ac4f',
  },
  {
    username: 'Kelvin Kiput',
    event: 'Milo Marathon Manila Leg 2025',
    comment: 'Pulvinar nulla enim nullam suspendisse. Nunc sapien, nunc condimentum proin. Et id sit congue odio.',
    profilePicture: '1564564321837-a57b7070ac4f',
  },
  {
    username: 'Kelvin Kiput',
    event: 'Milo Marathon Manila Leg 2025',
    comment: 'Pulvinar nulla enim nullam suspendisse. Nunc sapien, nunc condimentum proin. Et id sit congue odio.',
    profilePicture: '1564564321837-a57b7070ac4f',
  },
  {
    username: 'Kelvin Kiput',
    event: 'Milo Marathon Manila Leg 2025',
    comment: 'Pulvinar nulla enim nullam suspendisse. Nunc sapien, nunc condimentum proin. Et id sit congue odio.',
    profilePicture: '1564564321837-a57b7070ac4f',
  },
  {
    username: 'Kelvin Kiput',
    event: 'Milo Marathon Manila Leg 2025',
    comment: 'Pulvinar nulla enim nullam suspendisse. Nunc sapien, nunc condimentum proin. Et id sit congue odio.',
    profilePicture: '1564564321837-a57b7070ac4f',
  },
];

const Reviews = () => {
  return (
    <div className='h-[80vh] py-20'>
      <div className='grid h-full w-full grid-cols-3 grid-rows-3 gap-2 px-40'>
        {ReviewsList.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
