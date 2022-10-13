import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";

import '../styles/main.sass';
import { requisition, saveInput } from "../redux/actions";

const Header = () => {
  const [input, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    const keyCode = (e.keyCode ? e.keyCode : e.which);
  
    if (keyCode > 47 && keyCode < 58) {
      e.preventDefault();
    } else {
      value.length > 2 ? setIsDisabled(false) : setIsDisabled(true);
      const word = value.trim();
      setInput(word);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(saveInput(input));
    dispatch(requisition(input));
    
    document.querySelector('.app__header-form input').value = '';

    setInput("");
  };

  return (
    <header className='app__header'>
      <section className='app__logo'>
        <h1>Dicio</h1>
        <h2>+</h2>
      </section>
      <form className='app__header-form'>
        <input
          type='text'
          onKeyDown={ handleChange }
          placeholder='Conheça outras palavras.'
        />
        <button type='submit' disabled={isDisabled} onClick={handleClick}>
          Descobrir
        </button>
      </form>
    </header>
  )
}

export default connect()(Header);