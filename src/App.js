import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Interview from './Interview';
import Review from './Review';

class App extends React.Component {
    render() {
        return ( 
            <Router>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/interview" component={Interview}/>
                    <Route path="/review" component={Review}/>
                </Switch>
            </Router>
        );
    }
}

export default App;