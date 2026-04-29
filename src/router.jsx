

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Homepage from "./containers/homepage";
import SignIn from "./containers/signin";
import SignUp from "./containers/signup";
import ProductDetails from "./containers/productdetails";
import Cart from "./containers/cart";
import Wishlist from "./containers/wishlist";
import AboutPage from "./components/homepage/aboutpage";
import Collections from "./components/homepage/collections";
import ContactPage from "./components/homepage/contactpage";
import LandingPage from "./containers/landingpage";
import { isUserSignedIn } from "./reducks/users/selectors";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSignedIn = useSelector(isUserSignedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

const RouterConfig = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/homepage" component={Homepage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/collections" component={Collections} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/product/:id" component={ProductDetails} />

    {/* Protected */}
    <PrivateRoute path="/cart" component={Cart} />
    <PrivateRoute path="/wishlist" component={Wishlist} />
  </Switch>
);

export default RouterConfig;
