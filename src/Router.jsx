import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Category from './containers/Category';
import AddtoCart from './containers/Addtocart';
import ThankYou from './containers/ThankYou';
import WishList from './containers/WishList';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getUser } from './reducks/users/selectors';

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        
    }, []);

     return (
        <Switch>
            <Route exact path={"/"} component={token ? Home:} />

    // <Route exact path={"/thank-you"} component={ThankYou} />
        </Switch>
    );
};
export default Router;
