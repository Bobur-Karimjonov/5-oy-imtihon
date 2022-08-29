import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./cards.scss"

export const Cards = ({ item }) => {
  return (
    <NavLink className="ali text-decoration-none p-0 mt-4 car" to={`/author/${item.id}`} style={{ width: "15%" }}>
        <Img
          src={"https://book-service-layer.herokuapp.com/" + item.image}
        />
        <Name className="mt-2 text-center">{item.first_name} {item.last_name}</Name>
        <Year className="text-center">{item.date_of_birth}-{item.date_of_death}</Year>

    </NavLink>
  )
}


const Img = styled.img`
  width: 100%;
  height: 150px;
  margin: 0;
  border-radius: 10px;
`;

const Name = styled.h4`
  font-size: 20px;
  line-height: 20px;
  color: #C9AC8C;
`;

const Year = styled.p`
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;
