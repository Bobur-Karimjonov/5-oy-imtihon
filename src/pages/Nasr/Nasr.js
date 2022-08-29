import { Link, NavLink, Outlet } from 'react-router-dom';
import './nasr.scss';
import styled from 'styled-components';
import { Searchbook } from '../../components/BookSearch';
import HeroBG from '../../Img/hero_img.png';
export const Nasr = () => {
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
        <Searchbook />
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
              to='/nasr/temuriylar'>
              Temuriylar davri{' '}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'tur turr text-decoration-none ms-5'
                  : 'tur text-decoration-none ms-5'
              }
              to='/nasr/jadid'>
              Jadid adabiyoti{' '}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'tur turr text-decoration-none ms-5'
                  : 'tur text-decoration-none ms-5'
              }
              to='/nasr/sovet'>
              Sovet davri{' '}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'tur turr text-decoration-none ms-5'
                  : 'tur text-decoration-none ms-5'
              }
              to='/nasr/mustaqillik'>
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
