import PrimaryLink from '../components/ui/buttons/PrimaryLink';

const NotFoundPage = () => {
  return (
    <div className='grid h-screen place-content-center'>
      <div className='flex flex-col items-center gap-y-4'>
        <span className='text-9xl font-bold'>404</span>
        <span className='text-3xl'>Page not Found</span>
        <PrimaryLink text={'Go back'} to={'/'} className='text-2xl' />
      </div>
    </div>
  );
};
export default NotFoundPage;
