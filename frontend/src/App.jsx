import { Navbar } from './components';
import Header from './containers/header/Header';
import About from './containers/about/About';

import './App.scss';

const App = () => {
  return (
    <h1 className='app'>
      <Navbar />
      <Header />
      <About />
    </h1>
  )
}
export default App
