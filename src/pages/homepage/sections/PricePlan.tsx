import { FaRegCircleCheck, FaUser, FaUserGroup } from 'react-icons/fa6';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton';

const Prices = [
  {
    title: 'Personal Plan',
    subtitle: 'For you',
    sizeLimitRange: { min: 1, max: 1 },
    sizeLimitDescription: 'Individual',
    sizeLimitIcon: FaUser,
    price: 1337,
    features: ['Access to 12,000+ top courses', 'Certification prep', 'Goal-focused recommendations', 'AI-powered coding exercises'],
  },
  {
    title: 'Team Plan',
    subtitle: 'For you team',
    sizeLimitRange: { min: 2, max: 20 },
    sizeLimitDescription: '2 to 20 people',
    sizeLimitIcon: FaUserGroup,
    price: 1337,
    features: [
      'Access to 12,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
      'AI-powered coding exercises',
    ],
  },
  {
    title: 'Organization Plan',
    subtitle: 'For your whole organization',
    sizeLimitRange: { min: 21, max: 100 },
    sizeLimitDescription: 'more than 20 people',
    sizeLimitIcon: FaUserGroup,
    price: 1337,
    features: [
      'Access to 12,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
      'AI-powered coding exercises',
      'AI-powered coding exercises',
      'AI-powered coding exercises',
      'AI-powered coding exercises',
      'AI-powered coding exercises',
      'AI-powered coding exercises',
    ],
  },
];

const PricePlan = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-white'>
      <div className='w-full px-14'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold'>Accelerate growth - for you or your running club</h2>
          <span className='text-lg'>Reach goals faster with one of our plans or programs. Try one free today or contact sale to learn more.</span>
        </div>
        <div className='grid grid-cols-3 gap-x-10'>
          {Prices.map((price, index) => (
            <div key={index} className='relative flex flex-col overflow-clip rounded-lg border border-gray-300 bg-white shadow-md'>
              <div className='absolute inset-x-0 top-0 h-2 bg-gradient-to-br from-blue-500 to-blue-700' />
              {/* Header  */}
              <div className='flex flex-col gap-y-1 bg-gray-100 px-4 py-6'>
                <span className='text-xl font-medium'>{price.title}</span>
                <span className='text-xs'>{price.subtitle}</span>
                <div className='flex items-center gap-x-2 text-gray-600'>
                  <price.sizeLimitIcon className='' />
                  <span className='text-sm'>{price.sizeLimitDescription}</span>
                </div>
              </div>
              <div className='px-4 py-4'>
                <span className='font-bold'>Starting at {price.price.toLocaleString()} per month</span>
              </div>
              <PrimaryButton text={'Try it free'} className='mx-auto mt-2 w-11/12 rounded p-2 text-lg font-bold' />
              {/* Features  */}
              <ul className='flex flex-col gap-y-2 p-4'>
                {price.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-x-2 text-sm'>
                    <FaRegCircleCheck className='fill-green-600' />
                    <li>{feature}</li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
