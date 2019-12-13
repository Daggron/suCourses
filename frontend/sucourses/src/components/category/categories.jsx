import React from 'react'
import axios from 'axios';
import Category from './category'

export default function Categories() {
    const [categories , setCategories] = React.useState([]);
    React.useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then((res)=>{
            console.log(res.data)
            setCategories(res.data.categories)
        })
        .catch((err)=>{
            alert(err);
        })
    },[])
    return (
        <React.Fragment>
            {
               categories.map(category=>{
                    return (
                       <Category key={category._id} category={category} />
                    )
                })
            }
            
        </React.Fragment>
    )
}
