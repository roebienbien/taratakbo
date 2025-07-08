import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div>
			<ScrollToTop />
      <Navbar />
      <Outlet />
			<Footer />
    </div>
  );
};
export default Layout;
