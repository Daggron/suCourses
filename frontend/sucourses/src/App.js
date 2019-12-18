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

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: white)');

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
    <ThemeProvider theme={theme}>
      <div className="App">
          <Router>
            <Drawer />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/course"  component={CoursesComponent}/>
              <Route path="/search/query" component={Search} />
              <Route exact path="/category" component={CategoriesComponent} />
              <Route path="/category/find" component={categoriesFind} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
