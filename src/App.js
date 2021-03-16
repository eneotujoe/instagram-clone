import Nav from './components/Nav'
import Cards from './components/Cards'
import Sidebar from './components/Sidebar'
import './styles/App.scss'
import { Helmet } from "react-helmet"


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Eneotu | Instagram Clone</title>
      </Helmet>
      <Nav />
      <main>
        <div className='container'>
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
