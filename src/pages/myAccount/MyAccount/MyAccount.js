import './accountmy.scss';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import axios from 'axios';

export const MyAccount = () => {
  const { token, setToken } = useAuth();
  const [account, setAccount] = useState([]);

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

  const funcAccount = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { first_name, last_name, phone, image } = evt.target.elements;

    formData.append('first_name', first_name.value);
    formData.append('last_name', last_name.value);
    formData.append('phone', phone.value);
    formData.append('image', image.files[0]);
    axios
      .put(`https://book-service-layer.herokuapp.com/user/account`, formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={funcAccount} className='d-flex mt-5'>
        <div className='d-flex flex-column mx-5 '>
          <img
            className='rounded-circle mb-3'
            src={`https://book-service-layer.herokuapp.com/${account.image}`}
            width={200}
            height={200}
            alt=''
          />
          <label className='labe'>
            Upload cover
            <input type='file' name='book_img' className='inp' />
          </label>
        </div>
        <div>
          <div>
            <h3 className=''>My profile</h3>
            <h5 className='m-0 p-1'>First Name</h5>
            <input
              className='form-control accountmy__input'
              type='text'
              name='first_name'
              placeholder='John'
            />

            <p>Please enter your first name.</p>
            <h5 className='m-0 p-1'>Last Name</h5>
            <input
              className='form-control accountmy__input'
              type='text'
              name='last_name'
              placeholder='Wick'
            />
            <p>Please enter your last name.</p>
            <h5 className='m-0 p-1'>Phone</h5>
            <input
              className='form-control accountmy__input'
              type='tel'
              name='phone'
              placeholder='+61412345678'
            />
            <p>Please enter your phone number.</p>
            <button className='accountmr__btn' type='submit'>
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
