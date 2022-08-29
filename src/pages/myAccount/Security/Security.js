import './Sacurity.scss';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import axios from 'axios';

export const Security = () => {
  const { token, setToken } = useAuth();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setAccounts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const funcSecurity = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { email, currentPassword, newPassword } = evt.target.elements;

    formData.append('email', email.value);
    formData.append('currentPassword', currentPassword.value);
    formData.append('newPassword', newPassword.value);
    axios
      .put(`https://book-service-layer.herokuapp.com/user/security`, formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className='security__inner'>
      <h4 className='m-0 p-2'>Change Or Recover Your Password:</h4>
      <form onSubmit={funcSecurity}>
        <h5 className='p-0 m-0 my-3'>Email</h5>
        <input
          className='w-50 security__input form-control'
          type='email'
          name='email'
          placeholder='admin@mail.ru'
        />
        <p>Please enter your first name.</p>
        <h5 className='m-0 p-1'>Current password</h5>
        <input
          className='w-50 security__input form-control'
          type='password'
          name='currentPassword'
          placeholder='*********'
        />
        <p>Please enter your password.</p>
        <h5 className='m-0 -1'>New Password</h5>
        <input
          className='w-50 security__input form-control'
          type='password'
          name='newPassword'
          placeholder='*********'
        />
        <p>Please enter your phone number.</p>
        <button className='security__btn' type='submit'>
          Nimadir
        </button>
      </form>
    </div>
  );
};
