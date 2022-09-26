import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import RGB from './components/RGB/RGB';

function App() {
  return <div className='App'>
    <header>
      <nav>
        <ul>
          <li><NavLink to="/rgb/255/0/0">color1</NavLink></li>
          <li><NavLink to="/rgb/0/255/0">color2</NavLink></li>
          <li><NavLink to="/rgb/0/0/255">color3</NavLink></li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route path="/rgb/:r/:g/:b">
        <RGB />
      </Route>
      <Route exact path="/">
        <Redirect to="/rgb/255/0/0" />
      </Route>
      <Route path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  </div>;
}

export default App;
