import GlobalStyle from './theme/GlobalStyle';
import Layout from './components/Layout/Layout';
import RaMLogo from './assets/ramLogo.png';
import Loader from './components/common/Loader';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <img src={RaMLogo} alt='logo' />
        <Navbar />
        <Loader size='150px' />
      </Layout>
    </>
  );
}

export default App;
