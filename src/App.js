import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Interview from './Interview';
import Add from './Add';
import Submit from './Submit';

class App extends React.Component {
    render() {
        return ( 
            <Router>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/interview" component={Interview}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/submit" component={Submit}/>
                </Switch>
            </Router>
        );
    }
}

export default App;