import GlobalStyle from './theme/GlobalStyle';
import Layout from './components/Layout/Layout';
import Logo from './components/common/Logo';
import Navbar from './components/Navbar/Navbar';
import Error from './components/common/Error';
import Pagination from './components/Pagination/Pagination';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Logo width='100%' />
        <Navbar />
        <Error size='150px' />
        <Pagination />
      </Layout>
    </>
  );
}

export default App;
