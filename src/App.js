
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import WishList from './components/WishList';

function App() {
  return ( 
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/whishlist' element={ <WishList />} />
      </Routes>
      
      
     
      <Footer/>

      
    </div>
  );
}

export default App;
