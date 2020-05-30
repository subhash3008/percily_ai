import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import history from '../history';
// import Header from './Header/Header';
import Login from './screens/login/login';

class AppRoutes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    {/* <Header /> */}
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        {!this.props.userDetails && <Route component={Login} />}
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.user.userDetails
    }
}

export default connect(mapStateToProps, null)(AppRoutes);