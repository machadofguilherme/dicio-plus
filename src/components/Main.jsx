import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

import '../styles/main.sass';
import Footer from './Footer';

const Main = () => {
  const [info, setInfo] = useState([]);
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);

  const word = useSelector((state) => state.input);
  const wordData = useSelector((state) => state.wordData);
  const phrase = useSelector((state) => state.quoteData);
  const loading = useSelector((state) => state.loading);
  
  useEffect(() => {
    setTimeout(() => {
      setInfo(wordData[0]); 
      setDetails(phrase);
    }, 1500);
        
    info.length !== 0 ? setShow(true) : setShow(false);
  },[info, details, loading]);

  const { partOfSpeech, meanings } = info;

  return (
    <>
      <main className='app__main'>
        {
          !loading ? (<h5 className='app__loading'>Carregando...</h5>) : (
            <>
              <section className='app__word'>
                <article>
                <h3>{ word }</h3>
                <p>{ partOfSpeech }</p>
                </article>
                <article>
                <h4>Significado:</h4>
                <div>
                  {
                    show && (
                      [...meanings].map((item, index) => (
                        <ul key={ index }>
                          <li className='app__list'>
                            { item }
                          </li> 
                        </ul>
                      ))
                    )
                  }
                </div>
                </article>
                </section>
                <section className='app__info'>
                  <article className='app__phrase'>
                    {
                      details.map((item, index) => (
                        <blockquote key={ index }>
                          <h5>{ item.sentence }</h5>
                          <h6>{ item.author }</h6>
                        </blockquote>
                      ))
                    }
                  </article>
                </section>
            </>
          )
        }
      </main>
      <Footer />
    </>
  )
}

export default connect()(Main);