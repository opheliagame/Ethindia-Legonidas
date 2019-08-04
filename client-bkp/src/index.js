import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route }  from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Video from './components/Video';
import Registration from './components/Registration';
import './index.css';
import checkRegistered from './utils/checkRegistered';

console.log (checkRegistered() );

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            {
                checkRegistered() 
                    ? <Route exact={true} path='/' component={Feed} />
                    : <Route exact={true} path='/' component={Registration} />
            }
            <Route exact={true} path='/profile' component={Profile} />
            <Route exact={true} path='/video' component={Video} />
        </Switch>
    </Router>,
    document.getElementById('root')
);