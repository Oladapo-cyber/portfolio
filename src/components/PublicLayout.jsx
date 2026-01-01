import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';

const PublicLayout = () => {
  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
