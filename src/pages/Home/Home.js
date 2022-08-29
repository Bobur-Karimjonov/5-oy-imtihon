import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './home.scss';
import HeroBG from '../../Img/hero_img.png';
import styled from 'styled-components';
import { AuthorSearch } from '../../components/AuthorSearch';
export const Home = () => {
  return (
    <>
      <Cardl>
        <main>
          <section className='hero'>
            <div className='conta'>
              <img
                className='hero__img'
                src={HeroBG}
                alt='temur'
                width={1262}
                height={347}
              />
            </div>
          </section>
        </main>
        <AuthorSearch />
        <section className='page'>
          <div className='text-center mb-2'>
            <Asosiy>Asosiy kategoriyalar</Asosiy>
          </div>
          <div className='d-flex mt-4 justify-content-center'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'tur turr text-decoration-none'
                  : 'tur text-decoration-none'
              }
              to='/temuriylar'>
              Temuriylar davri{' '}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'tur turr text-decoration-none ms-5'
                  : 'tur text-decoration-none ms-5'
              }
              to='/jadid'>
              Jadid adabiyoti{' '}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'tur turr text-decoration-none ms-5'
                  : 'tur text-decoration-none ms-5'
              }
              to='/sovet'>
              Sovet davri{' '}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'tur turr text-decoration-none ms-5'
                  : 'tur text-decoration-none ms-5'
              }
              to='/mustaqillik'>
              Mustaqillik davri
            </NavLink>
          </div>
        </section>
        <Outlet />
      </Cardl>
    </>
  );
};

const Asosiy = styled.h2`
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c; ;
`;

const Cardl = styled.main`
  background: #191919;
`;
