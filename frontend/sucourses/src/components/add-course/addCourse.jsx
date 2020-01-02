import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import { Button , Typography, FormControl, FormLabel } from '@material-ui/core';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
 })(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "70vw",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "70vw"
  },
}));

function Heading(){
    return(
      <React.Fragment>
        <Typography component="h1" variant="h2">
            Add Courses
        </Typography>
      </React.Fragment>
    )
}

export default function AddCourse() {
    const classes = useStyles();

    const [initcategory , setInitCategory ] = React.useState([]);

    const [added , setAdded] = React.useState(false);

    React.useEffect(()=>{
        axios.get('/categories')
        .then(data=>{
            console.log(data.data);
            setInitCategory(data.data.categories);
        })
        .catch(err=>{
            alert(err);
        })
    },[])

        

    //eslint-disable-next-line
  

    
    const [title , settitle ] = React.useState("");
    const [url , setUrl] = React.useState("");
    const [instructor , setInstructor] = React.useState("");
    const [value , setValue] = React.useState("");
    const [description ,setDescription] = React.useState("");
    const [level , setLevel] = React.useState("");
    const [language , setLanguage] = React.useState("");
    const [category , setCategory ] = React.useState("");

    

    const handleTitleChange= (event) =>{
        settitle(event.target.value);
    }

    const handleUrlChange = (event)=>{
        setUrl(event.target.value);
    }

    const handleInstructor = (e)=>{
        setInstructor(e.target.value);
    }

    const handleLanguage = (e)=>{
        setLanguage(e.target.value);
    }

    const handleCategory = (e)=>{
        console.log(e.target.value);
        setCategory(e.target.value);
    }

    const handleLevel = (e)=>{
        setLevel(e.target.value);
    }

    const handleDescription = (e)=>{
        setDescription(e.target.value);
    }

    const handleValue = (e)=>{
        setValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data ={
                title:title,
                instructor:instructor,
                Level:level,
                Language:language,
                url:url,
                value:value,
                Category:category,
                description:description

        }

        // axios.post('/courses/data',data)
        //             .then((res)=>{
        //                 console.log(res.data);
        //                 setAdded(true);
        //                 console.log(added);
        // })

        console.log(data);
            
        
    }
    return (
        <React.Fragment>
            <Heading />
            <form onSubmit={handleSubmit} method="POST" className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                    id="standard-error-helper-text"
                    label="Title"
                    name="title"
                    helperText="Enter Title here"
                    onChange={handleTitleChange}
                    />
               </div>
               <div>
                    <TextField
                    id="standard-error-helper-text"
                    label="Url"
                    name="Url"
                    helperText="Enter Url here"
                    onChange={handleUrlChange}
                    />
               </div>
               <div>
                    <TextField
                    id="standard-error-helper-text"
                    label="Instructor"
                    helperText="Instructor Name"
                    onChange={handleInstructor}
                    />
               </div>
               <div>
                    <TextField
                    id="standard-error-helper-text"
                    label="Language"
                    helperText="Language of Instructor(English, Hindi)"
                    onChange={handleLanguage}
                    />
               </div>
               <div>
                <FormControl className={classes.formControl}>    
                    <InputLabel id="demo-simple-select-label">Level</InputLabel>
                    <Select
                    value={level}
                    onChange={handleLevel}
                    displayEmpty
                    className={classes.selectEmpty}
                    >
                    <MenuItem
                        value="Beginner"
                    >
                        Beginner
                    </MenuItem>

                    <MenuItem
                        value="Intermediate"
                    >
                        Intermediate
                    </MenuItem>

                    <MenuItem
                        value="Advanced"
                    >
                       Advanced
                    </MenuItem>

                    </Select>
                    <FormHelperText style={{textAlign:"left"}}>Select Category</FormHelperText>
                    </FormControl>
                </div>

               
               <div>
                    <TextField
                    id="standard-error-helper-text"
                    label="Description"
                    helperText="Description Of Course"
                    onChange={handleDescription}
                    />
               </div>
               <div>
                <FormControl className={classes.formControl}>    
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    value={category}
                    onChange={handleCategory}
                    displayEmpty
                    className={classes.selectEmpty}
                    >
                    {
                        initcategory.map(singleCategory=>{
                            return(
                                <MenuItem key={singleCategory._id} value={singleCategory.title}>
                                   <i className={singleCategory.icon}> </i> &nbsp; {singleCategory.title}
                                </MenuItem>
                            )
                        })
                    }
                    </Select>
                    <FormHelperText style={{textAlign:"left"}}>Select Category</FormHelperText>
                    </FormControl>
                </div>

                <div style={{marginTop: "10px"}}>
                <div style={{textAlign:"left" }}>
                    <div style={{width:"70vw",margin:"auto"}}>
                   <FormLabel>
                       Amount of Course
                   </FormLabel>
                   </div>
                </div>  
               
                <div style={{
                    width :"70vw",
                    margin : "auto",
                    textAlign: "left",
                    marginTop : 5
                }}>   
                 <FormLabel>
                    Free
                </FormLabel>             
                <GreenRadio
                        checked={value === 'Free'}
                        onChange={handleValue}
                        value="Free"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'Free' }}
                 />
                 <FormLabel>
                    Paid
                </FormLabel>
                   <GreenRadio
                        checked={value === 'Paid'}
                        onChange={handleValue}
                        value="Paid"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'Paid' }}
                 />
                 </div>
                </div>
                <Button type="submit" variant="contained" color="primary" style={{marginBottom:30}}>
                    Add Course 
                </Button>
                
            </form>
        
        </React.Fragment>
    )
}
