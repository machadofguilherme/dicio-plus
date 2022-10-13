import React, { useState } from "react";
import { connect } from "react-redux";
import { GiOpenBook } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { requisition, saveInput } from "../redux/actions";
import "../styles/main.sass";

const Login = () => {
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
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
    setInput("");
    setTimeout(() => navigate("/app"), 2000);
  };

  return (
    <main className="login">
      <section className="login__info">
        <article className="login__content">
          <i>
            <GiOpenBook />
          </i>
          <div>
            <h1>Torne o desconhecido</h1>
            <h2>algo conhecido</h2>
          </div>
        </article>
      </section>
      <section className="login__action">
        <article className="login__logo">
          <h1>Dicio</h1>
          <h2>+</h2>
        </article>
        <form className="login__form" onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Digite uma palavra."
            onKeyDown={ handleChange }
          />
          <button type="submit" disabled={ isDisabled }>
            Descubra o significado.
          </button>
        </form>
      </section>
    </main>
  );
};

export default connect()(Login);
