import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import PrimaryButton from './ui/buttons/PrimaryButton';
import { useLocation } from 'react-router';

const NavLinks = [
  { text: 'Services', to: '/about' },
  { text: 'Contact', to: '/about' },
  { text: 'FAQ', to: '/about' },
  { text: 'About', to: '/about' },
];

const Navbar = () => {
	const location = useLocation();
	const isHomePage = location.pathname === "/"
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
    <nav className={`blur-backdrop-filter fixed top-0 z-[99] h-16 w-full transition-all duration-300 bg-clip-padding ${isScrolled || !isHomePage ? 'bg-white text-black border-b border-gray-300' : 'text-white'}`}>
      <div className='mx-auto flex h-full w-[80%] items-center justify-between rounded-full px-8'>
        <Link to={'/'} className='text-4xl font-bold'>Logo</Link>
        <ul className='flex gap-x-4 text-xl '>
          {NavLinks.map((link, index) => (
            <Link key={index} to={link.to}>
              {link.text}
            </Link>
          ))}
        </ul>
        <div className='flex gap-x-4'>
          <PrimaryButton text={'Login'} className='w-20 font-bold p-3 text-lg' />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
