import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header/Header";
import NoMatch from "./Components/NoMatch/NoMatch";
import AddProducts from "./Components/AddProducts/AddProducts";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import ProductCheckout from "./Components/ProductCheckOut/ProductCheckout";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [products, setProducts] = useState([]);

  return (
    <UserContext.Provider
      value={([loggedInUser, setLoggedInUser], [products, setProducts])}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/product/:productId">
            <ProductCheckout />
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>
          <Route path="/manageProducts">
            <ManageProducts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
