import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoutes from './components/ProtectedRoutes';

import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path='/dashboard'>
                        <ProtectedRoutes render={(props) => <Dashboard {...props} />} />
                    </Route>
                    <Route exact path='login'>
                        <ProtectedRoutes render={(props) => <Login {...props} />} />
                    </Route>
                    <Route exact path='register'>
                        <ProtectedRoutes render={(props) => <Register {...props} />} />
                    </Route>
                    <Route path='/'>
                        <ProtectedRoutes render={(props) => <Dashboard {...props} />} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
