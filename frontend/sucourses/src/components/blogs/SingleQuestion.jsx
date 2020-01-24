import React from 'react'

export default function SingleQuestion(props) {
    React.useEffect(()=>{
        console.log(props.match.params.id)
    },[])
    return (
        <div>
            Hlo
        </div>
    )
}
