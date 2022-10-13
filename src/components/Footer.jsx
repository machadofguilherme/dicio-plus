import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/main.sass';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__logo'>
        <h1>Dicio</h1>
        <h2>+</h2>
      </section>
      <section className='footer__info'>
        <h3>Guilherme Machado</h3>
        <i>
          <a
            href="https://linkedin.com/in/machadodev/" 
            target="_blank" rel="noopener noreferrer">
            <FiLinkedin className='linkedin' />
          </a>
          <a 
            href="https://github.com/machadofguilherme" 
            target="_blank" rel="noopener noreferrer">
            <FiGithub className='github' />
          </a>
        </i>
      </section>
    </footer>
  )
}

export default Footer;