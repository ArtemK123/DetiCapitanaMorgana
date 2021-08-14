import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './pages/landing/LandingPage';
import ProductPage from './pages/product/ProductPage';
import Navigation from './components/Navigation';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import RulesPage from './pages/rules/RulesPage';
import {useState} from "react";
import isUserAuthenticated from "./services/isUserAuthenticated";
import LogoutComponent from './components/LogoutComponent';

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
          <ProductPage isUserAuthenticated={isAuthenticated}/>
        </Route>
        <Route path="/rules">
          <RulesPage setIsAuthenticated={setIsAuthenticated}/>
        </Route>
        <Route path="/logout">
          <LogoutComponent setIsAuthenticated={setIsAuthenticated}/>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
