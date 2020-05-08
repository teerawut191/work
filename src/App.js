import React from 'react';
import Header from './component/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Product from './pages/Home/Product';
import Create from './pages/Create/Create';
import CreateProduct from './pages/Create/CreateProduct';
import Profile from './pages/Profile/Profile';
import Edit from './pages/Edit/Edit';
import EditProduct from './pages/Edit/EditProduct';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './helper/PrivateRoute';
import Showproduct from './pages/Home/Showproduct';


var routers = {
  login: '/login',
  register: '/register',
  home: '/home',
  create: '/create',
  edit: '/edit/:id',
  product: '/product',
  createProduct:'/createProduct',
  editProduct: '/editProduct/:id',
  profile: '/profile',
  showproduct: '/showproduct'

 
};

function App() {
  return (
    <div>
      <Header/>
      <validationForm></validationForm>
      <div className="container login">
          <Switch>
            <Redirect exact from="/" to={routers.login}></Redirect>
            <Route exact path={routers.login} component={Login}></Route>
            <Route exact path={routers.register} component={Register}></Route>
          </Switch>
      </div>
      <div className="container">
          <Switch>
              <PrivateRoute exact path={routers.home} component={Home}></PrivateRoute>
              <PrivateRoute exact path={routers.create} component={Create}></PrivateRoute>
              <PrivateRoute exact path={routers.edit} component={Edit}></PrivateRoute>
              <PrivateRoute exact path={routers.product} component={Product}></PrivateRoute>
              <PrivateRoute exact path={routers.createProduct} component={CreateProduct}></PrivateRoute>
              <PrivateRoute exact path={routers.editProduct} component={EditProduct}></PrivateRoute>
              <PrivateRoute exact path={routers.profile} component={Profile}></PrivateRoute>
              <PrivateRoute exact path={routers.showproduct} component={Showproduct}></PrivateRoute>
          </Switch>
      </div>
    </div>
  );
}

export default App;