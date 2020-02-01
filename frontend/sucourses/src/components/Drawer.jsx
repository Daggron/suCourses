import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme , fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Fab from '@material-ui/core/Fab'
import BookIcon from '@material-ui/icons/Book';
import {Button, Input } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { MyContext } from '../context';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#f5f5f5',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  buttons:{
      marginTop: '5%',
      marginLeft:"5%",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: "auto",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  inputRoot: {
    color: '#181818',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
}));



export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [search , setSearch] = React.useState("");
  //eslint-disable-next-line
  const [login , setLogin] = React.useState(false);

  //eslint-disable-next-line
  const [success , setSuccess] = React.useContext(MyContext);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (e) =>{
    // console.log(e.target.value)
    setSearch(e.target.value)
  }



  return (
    <div  className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{color : "#424242"}}>
            SuCourses
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        
        <div className={classes.buttons}>
            <Link to="/">
                <Fab color="primary" variant="extended" aria-label="add">
                    <HomeIcon /> Home
                </Fab>
            </Link>
        </div>

        <div className={classes.buttons}>
            <Link to="/course">
                <Fab color="primary" variant="extended" aria-label="Courses">
                    <BookIcon /> Courses
                </Fab>
            </Link>
        </div>

        <div className={classes.buttons}>
            <Link to="/category">
                <Fab color="primary" variant="extended" aria-label="Category">
                    <CategoryIcon /> Category
                </Fab>
            </Link>
        </div>

        <div className={classes.buttons}>
            <Link to="/add">
                <Fab color="primary" variant="extended" aria-label="Category">
                    <PostAddIcon /> Add Course
                </Fab>
            </Link>
        </div>

        <div className={classes.buttons}>
            <Link to="/jobsfinder">
                <Fab color="primary" variant="extended" aria-label="Category">
                    <PostAddIcon /> Find Job
                </Fab>
            </Link>
        </div>

        <div className={classes.buttons}>
            <Link to="/articles">
                <Fab color="primary" variant="extended" aria-label="Category">
                    <CategoryIcon /> Articles
                </Fab>
            </Link>
        </div>

        { localStorage.getItem('token') ||  success.success ?(
           <div className={classes.buttons}>
             <Link to="editor">
               <Fab  color="primary" variant="extended" aria-label="Category">
                    Write Article
               </Fab>
              </Link>
           
          </div>
        ):(
          ""
        )}

        <div className={classes.buttons}>
            <Link to="/register">
                <Fab color="primary" variant="extended" aria-label="Category">
                    <PostAddIcon /> Register
                </Fab>
            </Link>
        </div>
        

        { localStorage.getItem('token')  || success.success!==false ?(
           <div className={classes.buttons}>
               <Fab onClick={()=>{ localStorage.removeItem('token'); success.setSuccess(false) }} color="primary" variant="extended" aria-label="Category">
                    Logout 
               </Fab>
           
          </div>
        ):(
          <div className={classes.buttons}>
           <Link to="/logger">
            <Fab onClick={localStorage.removeItem('token')}  color="primary" variant="extended" aria-label="Category">
                Login 
            </Fab>
          </Link>
      
         </div>
        )}



        <div className={classes.buttons}>
            <Input
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              variant="outlined"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
            {search.length!==0 ?(
              <Link to={`/search?search=${search}`}>
                <Button variant="contained" color="primary"  style={{marginTop:10}}> 
                  <SearchIcon/>
                </Button>
              </Link>
            )
            :(
              <Button variant="contained" color="primary"  style={{marginTop:10}}> 
                  <SearchIcon/>
              </Button>
            )
            }
          </div>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}