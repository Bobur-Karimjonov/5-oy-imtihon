import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './BookCards';

export const BookCards = ({ item }) => {
  return (
    <NavLink
      className='ali text-decoration-none p-0 mt-4'
      to={`/book/${item.id}`}
      style={{ width: '15%' }}>
      <Img src={'https://book-service-layer.herokuapp.com/' + item.image} />
      <Name className='mt-2 text-center'>{item.title}</Name>
    </NavLink>
  );
};

const Img = styled.img`
  width: 100%;
  height: 150px;
  margin: 0;
  border-radius: 10px;
`;

const Name = styled.h4`
  font-size: 20px;
  line-height: 20px;
  color: #c9ac8c;
`;
