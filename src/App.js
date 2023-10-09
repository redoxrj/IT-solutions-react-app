import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './styles/App.scss'
import Header from './components/Header'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Services from './components/Services.js'
import './styles/mediaquery.scss'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/services' element={<Services/>} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;