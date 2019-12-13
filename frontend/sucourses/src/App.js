import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Drawer from './components/Drawer';
import Home from './components/home';
import Categories from './components/category/categories';

function App() {
  return (
    <div className="App">
        <Router>
           <Drawer />
            <Route exact path="/" component={Home}/>
            <Route path="/categories" component={Categories} />
        </Router>
    </div>
  );
}

export default App;
