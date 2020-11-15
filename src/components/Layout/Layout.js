import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import { Link } from 'react-router-dom';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header className='layout__header'>
        <Link to='/'>
          <h1>Country Info</h1>
          <PublicIcon />
        </Link>
        <div className='layout__theme'>
          <p>Light Mode</p> <Brightness6Icon />
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
