import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import PrimaryButton from './ui/buttons/PrimaryButton';
import { useLocation } from 'react-router';
import TaratakboIcon from './icons/TaratakboIcon';
import SecondaryButton from './ui/buttons/SecondaryButton';

const NavLinks = [
  { text: 'Services', to: '/services' },
  // { text: 'Contact', to: '/about' },
  { text: 'FAQ', to: '/faq' },
  { text: 'About', to: '/about' },
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const changeNavBackground = () => {
    window.scrollY >= 1 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground);
    return () => {
      window.removeEventListener('scroll', changeNavBackground);
    };
  }, []);
  return (
    <nav
      className={`blur-backdrop-filter fixed top-0 z-[99] h-16 w-full bg-clip-padding transition-all duration-300 ${isScrolled || !isHomePage ? 'border-b border-gray-300 bg-white text-black' : 'text-white'}`}
    >
      <div className='mx-auto flex h-full w-[80%] items-center justify-between rounded-full px-8'>
        <Link to={'/'} className='text-2xl   font-bold'>
					<TaratakboIcon height={40} width={200}  active={isScrolled}/>
        </Link>
        <ul className='flex gap-x-4 text-xl font-medium'>
          {NavLinks.map((link, index) => (
            <Link key={index} to={link.to}>
              {link.text}
            </Link>
          ))}
        </ul>
        <div className='flex gap-x-4'>
          <PrimaryButton text={'Login'} className='w-24 p-2' />
					<SecondaryButton text={'Sign up'} className='w-24 p-2' />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
