import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from './components/Navbar';
import Dashboard from './screens/Dashboard';
import Class from './screens/Class';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/dashboard">
                        <RecoilRoot>
                            <Navbar />
                            <Dashboard />
                        </RecoilRoot>
                    </Route>
                    <Route exact path="/class/:id">
                        <RecoilRoot>
                            <Navbar />
                            <Class />
                        </RecoilRoot>
                    </Route>
                </Switch>
            </Router>  
        </div>
    );
}

export default App;