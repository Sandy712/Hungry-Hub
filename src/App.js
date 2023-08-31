import './App.css';
 
import MenuView from './components/Products/MenuView';
import MainSlider from './components/Slider/MainSlider';
import Carts from './components/Cart/Carts';
import { useSelector } from 'react-redux';
import Navbars from './components/Navbar/Navbars';
import Footer from './components/Footer/Footer';
 
 


function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
    <Navbars/>
    <div style={{marginTop:'4rem'}}>
    <MainSlider/>
     
      <hr />
     
    </div>

    <MenuView/>
    <div style={{marginTop:'4rem'}}>
    {showCart&& <Carts/>}
    </div>

    <Footer/>
    </>
  );
}

export default App;
