import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header/Header";
import NoMatch from "./Components/NoMatch/NoMatch";
import AddProducts from "./Components/AddProducts/AddProducts";
import ManageProducts from "./Components/ManageProducts/ManageProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
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
    </div>
  );
}

export default App;
