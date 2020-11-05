import React from 'react'
import Main from '../pages/layout/Main'
import MainAdmin from '../pages/layout/MainAdmin'
import Home from '../pages/view/Main/Home'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Product from '../pages/view/Main/Product';
import FoodDetail from '../pages/view/Main/FoodDetail';

const Routers = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
               
                    <MainAdmin>
                       
                    </MainAdmin>
                   
                </Route>
                <Route >
                    <Main>
                        <Switch>
                            <Route path="/" >
                                <Home />
                            </Route>
                            <Route path="/product" >
                                <Product/>
                            </Route>
                            <Route path="/food" >
                                <FoodDetail/>
                            </Route>
                           
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </HashRouter>
       
    )
}

export default Routers
