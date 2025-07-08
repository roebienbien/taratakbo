import UnsplashImage from '../../../../components/UnsplashImage';
import { TReview } from './Reviews';

const ReviewCard: React.FC<TReview> = ({ username, isFeatured, event, profilePicture, comment }) => {
  return (
    <div
      key={username}
      className={`flex h-full w-full items-center justify-center rounded-xl border border-gray-400 text-2xl ${isFeatured && 'col-span-2 row-span-2'}`}
    >
      <div className='flex flex-col gap-y-4 p-8'>
        <span className={`${isFeatured ? 'text-2xl' : 'text-sm'} font-normal`}>{comment}</span>
        <div className='flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <UnsplashImage photoId={profilePicture} alt={'commentor-avatar'} className='h-10 w-10 rounded-full' />
            <span>{username}</span>
          </div>
          <span className='text-sm'>{event}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
