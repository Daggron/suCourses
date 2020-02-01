import React from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';
import Drawer from './components/Drawer';
import Home from './components/home';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import { MyContextProvider } from './context';
import Myblogs from './components/blogs/myblogs/Myblogs';



const Login = Loadable({
  loader : ()=>import('./components/login/login'),
  loading : Loading
})

const CategoriesComponent = Loadable({
  loader : ()=> import('./components/category/categories'),
  loading : Loading,
});

const CoursesComponent = Loadable({
  loader : ()=> import('./components/courses/all-courses'),
  loading : Loading
});

const categoriesFind = Loadable({
  loader : ()=> import('./components/courses/courses'),
  loading : Loading
});

const Search = Loadable({
  loader: ()=>import('./components/search/search'),
  loading :Loading
})

const Error = Loadable({
  loader : ()=> import('./components/404'),
  loading : Loading

});

const AddCourse = Loadable({
  loader : ()=>import('./components/add-course/addCourse'),
  loading : Loading
});

const Jobs = Loadable({
  loader : ()=>import('./components/jobs/jobs'),
  loading : Loading
})

const Blogs = Loadable ({
  loader : ()=>import('./components/blogs/Blogs'),
  loading : Loading
});

const SingleQuestion = Loadable({
  loader : ()=>import('./components/blogs/SingleQuestion'),
  loading : Loading
});

const Editor = Loadable({
  loader : ()=>import('./components/blogs/EditorComponent'),
  loading : Loading
})



function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: "light")');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  
  return (
    <MyContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
            <Router>
              <Drawer />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/logger" component={Login} />
                <Route exact path="/course"  component={CoursesComponent}/>
                <Route path="/search" component={Search} />
                <Route exact path="/category" component={CategoriesComponent} />
                <Route path="/category/find" component={categoriesFind} />
                <Route path="/add" component={AddCourse} />
                <Route path="/jobsfinder" component={Jobs} />
                <Route exact path="/articles" component={Blogs} />
                <Route path="/articles/view/:id" component={SingleQuestion} />
                <Route path="/editor" component={Editor} />
                <Router path="/data/articles" component={Myblogs} />
                <Route path="*" component={Error} />
              </Switch>
            </Router>
        </div>
      </ThemeProvider>
    </MyContextProvider>
  );
}

export default App;
