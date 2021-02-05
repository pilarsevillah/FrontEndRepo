import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import Searcher from './views/Searcher';
import Login from './views/Login';
import Register from './views/Register';
import { AuthProvider } from './shared/context/authContext';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <AuthProvider>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/searcher">
              <Searcher></Searcher>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
