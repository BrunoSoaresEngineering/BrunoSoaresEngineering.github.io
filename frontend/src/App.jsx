import { Navbar } from './components';
import { Header, About, Work } from './containers';

import './App.scss';

const App = () => {
  return (
    <h1 className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
    </h1>
  )
}
export default App
