import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import TopBrand from './TopBrands';
import PurchasesInfo from './PurchasesInfo';
import Footer from './Footer';
import Home from './Home';
import MyAccount from './MyAccount';
import WishList from './WishList';
import Checkout from './Checkout';
import Login from './Login';
import Cart from './Cart';
import Catalog from './Catalog';
import Blog from './Blog';


const App = (): JSX.Element => (
  <>
    <Header />
    <Routes>
      <Route path='/the-shop' element={<Home />} />
      <Route path='my-account' element={<MyAccount />} />
      <Route path='wish-list' element={<WishList />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='login' element={<Login />} />
      <Route path='cart' element={<Cart />} />
      <Route path='catalog' element={<Catalog />} />
      <Route path='blog' element={<Blog />} />
    </Routes>
    <TopBrand />
    <PurchasesInfo />
    <Footer />
  </>
);


export default App;
