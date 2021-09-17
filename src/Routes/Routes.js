import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from "../views/homeview/HomeView";
import { SignInView } from '../views/singinview/SignInView';

export const Routes = ({children}) => {
    return(
        <Router basename="sanjinreactapp/" >
            {children}
            <Switch>
                <Route exact path="/signin" component={SignInView} />
                <Route path="/" component={HomeView} />
                
            </Switch>

        </Router>
    );
};

