import React from 'react';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Layout>
        <div className='home__inputContainer'>
          <div className='home__counts'>
            <p>Found 250 countries</p>
          </div>
          <div className='home__input'>
            <SearchInput />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
