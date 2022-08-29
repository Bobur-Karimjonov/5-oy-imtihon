import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Img/Logo.svg';
import Hedrlogo from './Img/hedrlogo.png';
import { Home, Nasr, BookPages, BookAuthor } from './pages';
import { Jadid } from './pages/Home/Jadid';
import { Mustaqillik } from './pages/Home/Mustaqillik';
import { Sovet } from './pages/Home/Sovet';
import { Temuriylar } from './pages/Home/Temuriylar';
import './private.scss';
import { NaTemuriylar } from './pages/Nasr/NaTemuriylar';
import { NaJadid } from './pages/Nasr/NaJadid';
import { NaSovet } from './pages/Nasr/NaSovet';
import { NaMustaqillik } from './pages/Nasr/NaMustaqillik';
import { useAuth } from './Hooks/useAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Private = () => {
  const { token, setToken } = useAuth();
  const [account, setAccount] = useState([]);

  console.log(account);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setAccount(res.data))
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <>
      <Header>
        <Container>
          <HeaderInner>
            <Link to='/'>
              <img src={Logo} alt='cite logo' width={96} height={36} />
            </Link>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nima active' : 'nima'
                }
                to='/'>
                Bosh sahifa
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nima active' : 'nima'
                }
                to='/nasr'>
                Nasr
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nima active' : 'nima'
                }
                to='/Nazm'>
                Nazm{' '}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nima active' : 'nima'
                }
                to='/Maqolalar'>
                Maqolalar
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nima active' : 'nima'
                }
                to='/Forum'>
                Forum
              </NavLink>
            </div>
            <div className='dropdown'>
              <img
                className='me-2 rounded-circle'
                src={Hedrlogo}
                width={50}
                height={50}
              />
              <button
                className='btnn dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'></button>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton1'>
                <li>
                  <NavLink
                    className='ms-3 text-dark text-decoration-none fw-bold'
                    to='/addbook'>
                    Add book
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className='ms-3 text-dark text-decoration-none fw-bold'
                    to='/addauthor'>
                    Add author
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className='ms-3 text-dark text-decoration-none fw-bold'
                    to='/myaccount'>
                    My account
                  </NavLink>
                </li>
              </ul>
              <Outlet />
            </div>
          </HeaderInner>
        </Container>
      </Header>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index path='/temuriylar' element={<Temuriylar />}></Route>
          <Route path='/jadid' element={<Jadid />}></Route>
          <Route path='/sovet' element={<Sovet />}></Route>
          <Route path='/mustaqillik' element={<Mustaqillik />}></Route>
        </Route>
        <Route path='/nasr' element={<Nasr />}>
          <Route
            index
            path='/nasr/temuriylar'
            element={<NaTemuriylar />}></Route>
          <Route path='/nasr/jadid' element={<NaJadid />}></Route>
          <Route path='/nasr/sovet' element={<NaSovet />}></Route>
          <Route path='/nasr/mustaqillik' element={<NaMustaqillik />}></Route>
        </Route>
        <Route path={`/book/:id`} element={<BookPages />} />
        <Route path={`/author/:id`} element={<BookAuthor />} />
      </Routes>
      <Outlet />
    </>
  );
};

const Header = styled.header`
  background: #191919;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 28px 0;
`;
const Container = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`;
const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
