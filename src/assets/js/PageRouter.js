//Route Naviagtion 
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import HomeScreen from './HomeScreen';

class PageRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => (
                        <HomeScreen />
                    )} />

                    <Route render={() => (
                        <NotFound />
                    )} />

                </Switch>
            </div>
        );
    }
}

export default PageRouter;