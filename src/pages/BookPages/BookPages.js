import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../Hooks/useAuth';
import axios from 'axios';
import { Outlet, useParams } from 'react-router-dom';
import Strelka from '../../Img/Subtract.svg';

export const BookPages = () => {
  const params = useParams();
  const [data, setData] = useState();
  const { token } = useAuth();
  console.log(data);
  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/book/bookId/${params.id}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <>
      <PagesGenreld>
        <Container>
          <div className='d-flex'>
            <div className='mt-5'>
              <Img
                className='rightimg'
                src={`https://book-service-layer.herokuapp.com/${data?.image}`}
                width={519}
                height={610}
                alt={data?.image}
              />
            </div>
            <div className='mt-5 left ms-5'>
              <H className='mb-5'>{data?.title}</H>
              <div className='d-flex'>
                <Pi>Sahifalar soni:</Pi>
                <p className='text-white ms-2'>{data?.page}</p>
              </div>
              <div className='d-flex'>
                <Pi>Chop etilgan:</Pi>
                <p className='text-white ms-2'>{data?.year}</p>
              </div>
              <div className='d-flex'>
                <Pi>Narxi:</Pi>
                <p className='text-white ms-2'>$ {data?.price}</p>
              </div>
              <p style={{ color: '#C9AC8C' }}>
                {' '}
                To'liq ma'lumot
                <img className='ms-2' src={Strelka} width={8} height={19} />
              </p>
              <p className='text-white'>{data?.description}</p>
            </div>
          </div>
        </Container>
        <Outlet />
      </PagesGenreld>
    </>
  );
};

const PagesGenreld = styled.div`
  position: absolute;
  top: 86px;
  width: 100%;
  background-color: #191919;
`;

const Container = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

const Pi = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  line-height: 20px;
`;
const H = styled.h2`
  font-size: 48px;
  line-height: 53px;
  color: #c9ac8c;
`;
const Img = styled.img`
  border-radius: 10px;
`;
