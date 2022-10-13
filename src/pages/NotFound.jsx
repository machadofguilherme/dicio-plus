import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import '../styles/main.sass';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className='notfound'>
      <section>
        <h1>Oh não!</h1>
        <h2>Um erro ocorreu. Você digitou uma palavra errada?</h2>
        <i>
          <FaSadTear />
        </i>
        <p>Por favor, tente novamente! =)</p>
      </section>
      <section>
        <button onClick={ () => navigate('/') } className='back'>
          Retorne para a página principal
        </button>
      </section>
    </main>
  )
}

export default NotFound;