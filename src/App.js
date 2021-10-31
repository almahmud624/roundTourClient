import './App.css';
import Header from './Component/Shared/Header/Header';
import Login from './Component/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Registration from './Component/Registration/Registration';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Shared/Footer/Footer';
import Blogs from './Component/Home/Blogs/Blogs';
import AboutUs from './Component/AboutUs/AboutUs';
import Packages from './Component/Home/Packages/Packages';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import MyOrders from './Component/MyOrders/MyOrders';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import AddPackage from './Component/AddPackage/AddPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/packages'>
              <Packages></Packages>
            </Route>
            <PrivateRoute path='/package-order/:orderId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manage-orders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/add-package'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
