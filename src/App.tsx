import GlobalStyle from './theme/GlobalStyle';
import Layout from './components/Layout/Layout';
import Logo from './components/common/Logo';
import Navbar from './components/Navbar/Navbar';
import ApiProvider from './providers/ApiProvider';
import Characters from './components/Characters/Characters';

function App() {
  return (
    <ApiProvider>
      <GlobalStyle />
      <Layout>
        <Logo width='100%' />
        <Navbar />
        <Characters />
      </Layout>
    </ApiProvider>
  );
}

export default App;
