import React from 'react'
import axios from 'axios';
import Category from './category';
import Book from '../../book.gif'

export default function Categories() {
    const [categories , setCategories] = React.useState([]);
    const [loaded , setLoaded] = React.useState(false);
    React.useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then((res)=>{
            console.log(res.data)
            setCategories(res.data.categories);
            setLoaded(true);
        })
        .catch((err)=>{
            alert(err);
        })
    },[])

    if(!loaded){
        return(
            <React.Fragment>
                    <img src={Book} alt="Loading" />
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <div>
                {
                categories.map(category=>{
                        return (
                        <div key={category._id}>
                               <Category  category={category} />
                         </div>
                        )
                    })
                }
            </div>
            
        </React.Fragment>
    )
}
