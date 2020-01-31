import React from 'react';

export const MyContext = React.createContext();

export function MyContextProvider(props){
    const [user, setUser] = React.useState({});
    const [success , setSuccess] = React.useState({});
    return(
        <MyContext.Provider value={[user , setUser , success , setSuccess]}>
            {
                props.children
            }
        </MyContext.Provider>
    )
}