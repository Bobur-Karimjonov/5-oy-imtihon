import { Link, Outlet } from 'react-router-dom';
import './MyAcount.css';

export const MyAcount = () => {
  return (
    <div className='container bbb'>
      <Link className='me-2 bor' to='MyAcount'>
        1 My account
      </Link>
      <Link className='me-2 bor' to='Acount'>
        2 Security
      </Link>
      <Link to='MAcount' className='bor'>
        3 Make Payment
      </Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
