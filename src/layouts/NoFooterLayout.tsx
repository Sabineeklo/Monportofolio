import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NoFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NoFooterLayout;
