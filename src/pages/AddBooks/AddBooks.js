import { useAuth } from '../../Hooks/useAuth';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { useEffect, useState } from 'react';
import ulug from '../../Img/ulugbek.png';
import './AddBooks.css';

export const AddBooks = () => {
  const { token, setToken } = useAuth(AuthContext);
  const [dataId, setDataId] = useState(1);
  const [data, setData] = useState([]);

  const selectClick = (evt) => {
    setDataId(evt.target.value);
  };
  const asd = (evt) => {
    console.log(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/genreId/${dataId}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((ress) => setData(ress.data))
      .catch((error) => console.log(error));
  }, [dataId]);

  const handleBookAdd = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [
      book_img,
      book_title,
      book_page,
      book_year,
      book_price,
      book_genre,
      book_author,
      book_description,
    ] = evt.target.elements;

    formData.append('image', book_img.files[0]);
    formData.append('title', book_title.value);
    formData.append('page', book_page.value);
    formData.append('year', book_year.value);
    formData.append('price', book_price.value);
    formData.append('genre_id', book_genre.value);
    formData.append('author_id', book_author.value);
    formData.append('description', book_description.value);

    axios
      .post('https://book-service-layer.herokuapp.com/book', formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <Div className='d-flex container'>
      <Form className='form d-flex' onSubmit={handleBookAdd}>
        <Left>
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className=''>
              <img className='mb-1' src={ulug} width='300' height='482' />
              <h3 className='mb-3 text-center tit'>Ulugbek hazinasi</h3>
              <label className='labe'>
                Upload cover
                <Input type='file' name='book_img' className='inp' />
              </label>
            </div>
          </div>
        </Left>
        <Wrapper>
          <h2 className='title'>Add book</h2>
          <Input
            className='form-control'
            type='text'
            name='book_title'
            placeholder='title'
          />
          <Input
            className='form-control'
            type='number'
            name='book_pages'
            placeholder='pages'
          />
          <Input
            className='form-control'
            type='text'
            name='book_year'
            placeholder='year'
          />
          <Input
            className='form-control'
            type='text'
            name='book_price'
            placeholder='price'
          />
          <Select
            className='form-select'
            name='book_genre'
            onClick={selectClick}>
            <option value='1'>Temuriylar davri</option>
            <option value='2'>Jadid adabiyoti</option>
            <option value='3'>Sovet davri</option>
            <option value='4'>Mustaqillik davri</option>
          </Select>
          <Select className='form-select' name='book_author' onClick={asd}>
            {data.map((e) => (
              <option key={e.id} value={e.id}>
                {e.first_name}
              </option>
            ))}
          </Select>
          <Textarea
            className='form-control'
            name='book_description'
            placeholder='Description'></Textarea>
          <Button type='submit'>Submit</Button>
        </Wrapper>
      </Form>
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  // top: -600px;
  /* width: 1349px; */
  /* margin: 0 auto; */
  /* height: 100%; */
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  background-color: rgba(243, 243, 243, 0.93); ;
`;

const Wrapper = styled.div`
  // margin: 0 auto;
  margin-top: 31px;
  height: 100%;
  margin-left: 108px;
  width: 330px;
  background-color: #fff;
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 330px;
  height: 46px;
  margin-bottom: 16px;
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
  height: 82px:
   margin-bottom: 16px;
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
