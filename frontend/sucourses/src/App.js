import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Drawer from './components/Drawer';
import Home from './components/home';
import Categories from './components/category/categories';
import Courses from './components/courses/courses';
import Allcourses from './components/courses/all-courses';

function App() {
  return (
    <div className="App">
        <Router>
           <Drawer />
            <Route exact path="/" component={Home}/>
            <Route  path="/course"  component={Allcourses}/>
            <Route exact path="/category" component={Categories} />
            <Route path="/category/find" component={Courses} />
           
        </Router>
    </div>
  );
}

export default App;
