import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import ProductPage from './pages/product/ProductPage';
import Navigation from './components/Navigation';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
