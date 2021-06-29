import { BrowserRouter as Router, Route } from "react-router-dom";

// All Pages
import Home from "pages/HomePage";
import Detail from "pages/DetailPage";
import Cart from "pages/CartPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/detail-page/:id" component={Detail} />
      <Route path="/cart-page" component={Cart} />
    </Router>
  );
}

export default App;
