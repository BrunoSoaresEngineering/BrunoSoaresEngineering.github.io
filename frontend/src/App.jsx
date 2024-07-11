import { Navbar } from './components';
import { Header, About, Work, Skills } from './containers';

import './App.scss';

const App = () => {
  return (
    <h1 className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </h1>
  )
}
export default App
