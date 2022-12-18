import GlobalStyle from './theme/GlobalStyle';
import Layout from './components/Layout/Layout';
import Loader from './components/common/Loader';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/common/Logo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Logo width='100%' />
        <Navbar />
        <Loader size='150px' />
      </Layout>
    </>
  );
}

export default App;
