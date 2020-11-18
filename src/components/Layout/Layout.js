import React, { useState, useLayoutEffect, useRef } from 'react';
import PublicIcon from '@material-ui/icons/Public';
import { Link } from 'react-router-dom';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import './Layout.css';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme')
  );
  const htmlRef = useRef(document.documentElement);

useLayoutEffect(() => {
    localStorage.setItem('theme', 'light');
    htmlRef.current.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    );
    setTheme(localStorage.getItem('theme'));
  }, []);

  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      htmlRef.current.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      htmlRef.current.setAttribute('data-theme', 'light');
    }
  };

  return (
    <div className='layout'>
      <header className='layout__header'>
        <Link to='/'>
          <h1>Country Info</h1>
          <PublicIcon />
        </Link>
        <div className='layout__theme'>
          <button
            className='layout__themeSwitcher'
            onClick={switchTheme}
          >
            {theme && theme[0].toUpperCase() + theme.slice(1)} Mode
          </button>
          <Brightness6Icon />
        </div>
      </header>

      <main className='layout__main'>{children}</main>

      <footer className='layout__footer'>
        <p>Vinit Raut, 2020</p>
      </footer>
    </div>
  );
};

export default Layout;
