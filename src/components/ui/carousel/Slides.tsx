import { Link } from 'react-router';
import UnsplashImage from '../../UnsplashImage';

export interface SlidesProps {
  title: string;
  photoId: string;
  subtitle?: string;
  description?: string;
  distance?: number;
  planDuration?: string;
  url?: string;
}

const Slides: React.FC<SlidesProps> = ({ title, planDuration, photoId, url }) => {
  return (
    <div className='w-full min-w-0 flex-none pl-4 sm:w-1/2 md:w-1/2 lg:w-1/3'>
      {/* Cards */}
      <div className='relative flex h-full scale-100 flex-col overflow-clip rounded-lg border border-gray-300 duration-300'>
        <Link to={`/running/${url}`} className='h-full brightness-85'>
          <UnsplashImage photoId={photoId} alt={'photoid'} className='' />
        </Link>
        {/* Content section */}
        <div className='absolute bottom-0 left-0 flex w-full flex-col gap-y-2 rounded-b-lg bg-gradient-to-t from-black/90 to-transparent p-4 text-xs text-white shadow-xl lg:text-base'>
          <span className='text-lg font-extrabold lg:text-6xl'>{title}</span>
          <span className='text-lg'>{planDuration}</span>
        </div>
      </div>
    </div>
  );
};

export default Slides;
