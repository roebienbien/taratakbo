import PrimaryButton from '../../../components/ui/buttons/PrimaryButton';
import UnsplashImage from '../../../components/UnsplashImage';
const runGuy = '1466761366829-84fd59a22e0b';

const Hero = () => {
	const peopleJoinedCount  = 12645
  return (
    <div className='relative flex h-screen w-full text-white'>
			<UnsplashImage photoId={runGuy} alt={'hero-image'} className='object-right-top' />
			{/* <div className='absolute left-0 h-full w-full bg-black opacity-80'></div> */}
			<div className='absolute left-0 h-full w-full bg-gradient-to-l from-transparent to-black'></div>
			<div className='absolute flex px-16 h-full w-2/3 flex-col items-center justify-center'>
				<div className='flex flex-col gap-y-4'>
					{/* <h1 className='max-w-2xl text-7xl'>Convincing headline Lorem ipsum dolor </h1> */}
					<h1 className='max-w-4xl text-7xl'>
						Start your <span className='font-bold'>personalized</span> running path now
					</h1>
          {/* <p className='max-w-[620px] text-xl'> */}
          <p className='max-w-[570px] text-xl'>
            Our experienced coaches create personalized plans tailored to your goals and fitness level. Whether you're new to running or aiming for a
            personal best, we're here to guide you every step of the way.
          </p>
          <div className='flex items-center gap-x-4 font-bold'>
            {/* <SecondaryButton text='Try for free' className='w-52' /> */}
            <div className='relative'>
              <PrimaryButton text='Join now for free' className='w-72 text-xl' />

              {/* <FaLongArrowAltRight className='absolute top-1/2 right-6 -translate-y-1/2 text-2xl text-white' /> */}
            </div>
          </div>
          <span className=''>Avatar here {peopleJoinedCount.toLocaleString()} Have already joined</span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
