import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from './components/Navbar';
import Dashboard from './screens/Dashboard';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/dashboard">
                        <Navbar />
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>  
        </div>
    );
}

export default App;