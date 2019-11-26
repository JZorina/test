  
import React from 'react';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom';
import App from './App';
import Login from './Login';

class Start extends React.Component{
    render(){
        return(
            <div>
                <Router>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/courses" component={App} /> 
                        </Switch>
                </Router>
             </div>
        );
    }
}
export default Start;