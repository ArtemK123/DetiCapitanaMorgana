import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import ProductPage from './pages/product/ProductPage';
import Navigation from './components/Navigation';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import RulesPage from './pages/rules/RulesPage';
import {useState} from "react";
import isUserAuthenticated from "./services/isUserAuthenticated";

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(isUserAuthenticated());

  return (
    <BrowserRouter>
      <Navigation isAuthenticated={isAuthenticated}/>
      <Switch>
        <Route path="/login">
          <LoginPage setIsAuthenticated={setIsAuthenticated}/>
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/product">
          <ProductPage setIsAuthenticated={setIsAuthenticated}/>
        </Route>
        <Route path="/rules">
          <RulesPage setIsAuthenticated={setIsAuthenticated}/>
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
