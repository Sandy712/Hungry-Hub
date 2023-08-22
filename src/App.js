import './App.css';
 
import MenuView from './components/Products/MenuView';
import MainSlider from './components/Slider/MainSlider';
import Carts from './components/Cart/Carts';
import { useSelector } from 'react-redux';
import Navbars from './components/Navbar/Navbars';
 
 


function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
    <Navbars/>
    <MainSlider/>
    <MenuView/>
    {showCart&& <Carts/>}
    </>
  );
}

export default App;
