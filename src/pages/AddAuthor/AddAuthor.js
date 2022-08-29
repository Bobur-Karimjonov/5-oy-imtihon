import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import avloniy from '../../Img/avloniy.png';
import { useAuth } from '../../Hooks/useAuth';
import styled from 'styled-components';
import './AddAuthor';

export const AddAuthor = () => {
  const { token } = useAuth();
  console.log(token);
  const handleAuthorAdd = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [
      author_img,
      author_first_name,
      author_last_name,
      author_birth,
      author_dead,
      author_genre,
      author_country,
      author_description,
    ] = evt.target.elements;

    formData.append('image', author_img.files[0]);
    formData.append('first_name', author_first_name.value);
    formData.append('last_name', author_last_name.value);
    formData.append('date_of_birth', author_birth.value);
    formData.append('date_of_death', author_dead.value);
    formData.append('genre_id', author_genre.value);
    formData.append('country', author_country.value);
    formData.append('bio', author_description.value);

    axios
      .post('https://book-service-layer.herokuapp.com/author', formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <Div className='d-flex'>
      <Form className='form' onSubmit={handleAuthorAdd}>
        <Left>
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='mt-5'>
              <img
                className='mb-1 mt-3'
                src={avloniy}
                width='350'
                height='266'
              />
              <h3 className='mb-3 tit text-center'>Ulugbek hazinasi</h3>
              <label className='labe'>
                Upload cover
                <Input type='file' name='author_img' className='inp' />
              </label>
            </div>
          </div>
        </Left>
        <Wrapper>
          <h2 className='title'>Add author</h2>
          <Input
            className='form-control'
            type='text'
            name='author_first_name'
            placeholder='First name'
          />
          <Input
            className='form-control'
            type='text'
            name='author_last_name'
            placeholder='Last name'
          />
          <Input
            className='form-control'
            type='number'
            name='author_birth'
            placeholder='Date of birth'
          />
          <Input
            className='form-control'
            type='number'
            name='author_dead'
            placeholder='Date of death'
          />
          <Select className='form-select' name='author_genre'>
            <option value='1'>Temuriylar davri</option>
            <option value='2'>Jadid adabiyoti</option>
            <option value='3'>Sovet davri</option>
            <option value='4'>Mustaqillik davri</option>
          </Select>
          <Input
            className='form-control'
            type='text'
            name='country'
            placeholder='Country'
          />
          <Textarea
            className='form-control'
            name='author_description'
            placeholder='Bio'></Textarea>
          <Button type='submit'>Submit</Button>
        </Wrapper>
      </Form>
    </Div>
  );
};

const Div = styled.div`
  width: 1349px;
  margin: 0 auto;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  background-color: rgba(243, 243, 243, 0.93); ;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 31px;
  height: 100%;
  width: 330px;
  background-color: #fff;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  width: 330px;
  height: 46px margin-bottom 16px;
  background: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 29px;
  padding-bottom: 10px;
  margin-bottom: 17px;
`;

const Button = styled.button`
  background-color: #152540;
  border-radius: 99px;
  color: white;
  width: 330px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  border: none;
`;

const Select = styled.select`
  width: 330px;
  height: 46px margin-bottom 16px;
  background: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 29px;
  padding-bottom: 10px;
  margin-bottom: 17px;
`;

const Textarea = styled.textarea`
  width: 330px;
  height: 82px margin-bottom 16px;
  background: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 29px;
  padding-bottom: 10px;
  margin-bottom: 17px;
`;

const Img = styled.img`
  width: 70%;
  height: auto;
  margin-left: 70px;
  margin-top: 100px;
  margin-bottom: 85px;
`;
