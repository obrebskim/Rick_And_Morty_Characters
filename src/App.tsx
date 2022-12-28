import GlobalStyle from './theme/GlobalStyle';
import Layout from './components/Layout/Layout';
import Logo from './components/common/Logo';
import Navbar from './components/Navbar/Navbar';
import ApiProvider from './providers/ApiProvider';
import Characters from './components/Characters/Characters';
import Favourites from './components/Characters/Favourites';
import useCategoryStore from './hooks/useCategoryStore';
import { ECategory } from './@types/CategoryEnum';
import FilteredCharacters from './components/Characters/FilteredCharacters';

function App() {
  const category = useCategoryStore((state) => state.category);
  return (
    <ApiProvider>
      <GlobalStyle />
      <Layout>
        <Logo width='100%' />
        <Navbar />
        {category === ECategory.all && <Characters />}
        {category === ECategory.favourites && <Favourites />}
        {category === ECategory.search && <FilteredCharacters />}
      </Layout>
    </ApiProvider>
  );
}

export default App;
