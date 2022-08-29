import code from '../../Img/password.png';
import axios from 'axios';
import styled from 'styled-components';
import { useAuth } from '../../Hooks/useAuth';

export const Register = () => {
  const { token, setToken } = useAuth();
  const handleUserRegister = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [first_name, last_name, number, email, password] =
      evt.target.elements;
    formData.append('first_name', first_name.value);
    formData.append('last_name', last_name.value);
    formData.append('phone', number.value);
    formData.append('email', email.value);
    formData.append('password', password.value);

    axios
      .post('https://book-service-layer.herokuapp.com/user/register', formData)
      .then((res) => setToken(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Div className='d-flex'>
      <Left>
        <Img src={code} />
      </Left>
      <Wrapper>
        <h2>Sign up</h2>
        <Form onSubmit={handleUserRegister} className='form d-flex flex-column'>
          <Input
            placeholder='First name'
            className='form-control mb-3 m-auto'
            type='text'
            name='first_name'
          />
          <Input
            placeholder='Last name'
            className='form-control mb-3 m-auto'
            type='text'
            name='last_name'
          />
          <Input
            placeholder='Phone'
            className='form-control mb-3 m-auto'
            type='tel'
            name='phone'
          />
          <Input
            placeholder='Email'
            className='form-control mb-3 m-auto'
            type='email'
            name='email'
          />
          <Input
            placeholder='Password'
            className='form-control mb-3 m-auto'
            type='password'
            name='password'
          />
          <Button type='submit'>Next step</Button>
        </Form>
      </Wrapper>
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
  height: 100%;
  background-color: #c9ac8c;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 75px;
  height: 100%;
  width: 330px;
  background-color: #fff;
`;

const Form = styled.form`
  width: 100%;
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

const Img = styled.img`
  width: 70%;
  height: auto;
  margin-left: 70px;
  margin-top: 100px;
  margin-bottom: 85px;
`;
