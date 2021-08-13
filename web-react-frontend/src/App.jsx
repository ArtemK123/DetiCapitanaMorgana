import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import ProductInfo from './pages/productInfo/ProductInfo';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/product">
          <ProductInfo />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
