import GlobalStyle from './theme/GlobalStyle';
import Layout from './components/Layout/Layout';
import RaMLogo from './assets/ramLogo.png';
import Loader from './components/common/Loader';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <img src={RaMLogo} alt='logo' />
        <Loader size='150px' />
      </Layout>
    </>
  );
}

export default App;
