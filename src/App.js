import { BrowserRouter as Router, Route } from "react-router-dom";

// All Pages
import Home from "pages/HomePage";
import Detail from "pages/DetailPage";
import Cart from "pages/CartPage";
import ProductPage from "pages/ProductPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/detail-page/:id" component={Detail} />
      <Route path="/cart-page" component={Cart} />
      <Route path="/showcase" component={ProductPage} />
    </Router>
  );
}

export default App;
