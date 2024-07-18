import { Navbar } from './components';
// eslint-disable-next-line object-curly-newline
import { Header, About, Work, Skills } from './containers';

import './App.scss';

const App = () => (
    <h1 className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </h1>
);
export default App;
