import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import RGB from './components/RGB/RGB';

function App() {
  return <div className='App'>
    <Switch>
      <Route path="/rgb/:r/:g/:b">
        <Header />
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
