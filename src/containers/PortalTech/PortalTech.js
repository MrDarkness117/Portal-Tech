import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../components/Header/Header';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Companies from '../../components/Companies/Companies';
import Requests from '../../components/Requests/Requests';
import Footer from '../../components/Footer/Footer';
import API from '../API/API';
import axios from '../../axios-orders';

class PortalTech extends Component {
    render () {
        return(
            <React.Fragment>
                <Switch>
                    <Route path='/' exact
                        component={() => (
                            <div>
                                <Header />
                                <InfoBlock />
                                <Companies />
                                <Requests />
                                <Footer />
                            </div>
                        )}
                    />
                    <Route path='/api' component={API} />
                </Switch>
            </React.Fragment>
        )
    }
};

export default PortalTech;