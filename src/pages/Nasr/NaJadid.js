import axios from 'axios';
import { useState } from 'react';
import { BookCards } from '../../components/BookCards';

export const NaJadid = () => {
  const [token, setToken] = useState([]);

  axios
    .get('https://book-service-layer.herokuapp.com/book/genreId/2')
    .then((data) => setToken(data.data))
    .catch((error) => console.log(error));
  return (
    <div className='container mt-5 pb-4'>
      {token.length && (
        <ul className='d-flex flex-wrap justify-content-around list-unstyled p-0 m-0'>
          {token.map((e) => (
            <BookCards key={e.id} item={e} />
          ))}
        </ul>
      )}
    </div>
  );
};
