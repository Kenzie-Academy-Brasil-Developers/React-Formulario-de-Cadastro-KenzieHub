import  { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { Global } from './styles/Global/global';


function App() {
  return (
    <BrowserRouter>
    <Global />
      <Switch>
        <Route exact path = '/' component={Login}>
        </Route>
        <Route exact path = '/register' component={Register}>
        </Route>
        <Route exact path = '/home' component={Home}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
