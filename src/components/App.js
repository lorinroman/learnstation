import React from 'react';

import FrontPage from './FrontPage/FrontPage';
import history from '../history';
import { Router, Route } from 'react-router-dom';
import UserCreateAccount from './UserLoginCreate/UserCreateAccount';


const App = () => {

    return (
        
        <div className="App">
            <Router history={history}>
                <div>
                    <Route path="/" exact component={FrontPage}/>
                    <Route path="/signup" exact component={UserCreateAccount}/>
                </div>
            </Router>
          
        </div>
    ); 
};


export default App;