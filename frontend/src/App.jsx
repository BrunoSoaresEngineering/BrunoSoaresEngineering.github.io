import { Navbar } from './components';
// eslint-disable-next-line object-curly-newline
import { Header, About, Footer, Work, Skills } from './containers';

import './App.scss';

const App = () => (
    <h1 className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </h1>
);

export default App;
