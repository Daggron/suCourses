import React from 'react'
import axios from 'axios';
import Loader from 'react-loadable';
import Loading from '../Loading';

const Category = Loader({
    loader : ()=>import('./category'),
    loading : Loading
})

export default function Categories() {
    const [categories , setCategories] = React.useState([]);
    React.useEffect(()=>{
        axios.get('/categories')
        .then((res)=>{
            console.log(res.data)
            setCategories(res.data.categories);
        })
        .catch((err)=>{
            alert(err);
        })
    },[])

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
