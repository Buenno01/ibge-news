import { Outlet } from 'react-router-dom';
import LayoutHeader from './LayoutHeader';

function Layout() {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
    </div>
  );
}

export default Layout;
