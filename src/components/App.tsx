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
import CreateAccount from './CreateAccount';
import Cart from './Cart';
import Catalog from './Catalog';
import Product from './Product';
import Blog from './Blog';
import BlogPost from './BlogPost';
import PageNotFound from './404';
import {useAppSelector} from '../redux-hooks';
import {TAccount} from '../types/TAccount';


const App = (): JSX.Element => {
  const activeAccount: boolean = useAppSelector(
    state => state.account.accounts
      .findIndex((account: TAccount): boolean => account.isActive)!== -1
  );

  return(
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='my-account' element={activeAccount ? <MyAccount /> : <Login />} />
        <Route path='wish-list' element={<WishList />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='login' element={<Login />} />
        <Route path='create-account' element={<CreateAccount />} />
        <Route path='cart' element={<Cart />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='catalog/:id' element={<Product />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogPost />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <TopBrand />
      <PurchasesInfo />
      <Footer />
    </>
  );
};


export default App;
