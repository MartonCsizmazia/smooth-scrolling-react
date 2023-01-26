import "./styles/style.scss";
import Navigation from "./component/Navigation";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/shop" exact component={ShopScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
