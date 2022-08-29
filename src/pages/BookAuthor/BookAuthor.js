import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../Hooks/useAuth';
import axios from 'axios';
import { Outlet, useParams } from 'react-router-dom';

export const BookAuthor = () => {
  const params = useParams();
  const [data, setData] = useState();
  const { token } = useAuth();
  console.log(data);
  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/authorId/${params.id}`,
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
            <div>
              <Img
                src={`https://book-service-layer.herokuapp.com/${data?.image}`}
                width={582}
                height={679}
                alt='df'
              />
            </div>
            <Left>
              <Nom>
                {data?.first_name} {data?.last_name}
              </Nom>
              <Pi> {data?.bio}</Pi>
              <div className='d-flex align-items-center mt-5'>
                <div>
                  <Pi>Tug'ilgan sanasi</Pi>
                  <Time datetime={data?.date_of_birth}>
                    {data?.date_of_birth}
                  </Time>
                  <Pi>{data?.country}</Pi>
                </div>
                <Min className='ms-5 me-5'>-</Min>
                <div>
                  <Pi>O'lgan sanasi</Pi>
                  <Time datetime={data?.date_of_death}>
                    {data?.date_of_death}
                  </Time>
                  <Pi>{data?.country}</Pi>
                </div>
              </div>
            </Left>
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
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
const Img = styled.img`
  border-radius: 50px;
`;
const Left = styled.div`
  margin-left: 98px;
`;

const Pi = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;
const Nom = styled.p`
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: #c9ac8c;
  margin-top: 53px;
`;

const Min = styled.p`
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: #c9ac8c;
`;
const Time = styled.time`
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: #c9ac8c;
`;
