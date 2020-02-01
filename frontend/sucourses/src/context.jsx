import React from 'react';

export const MyContext = React.createContext();

export function MyContextProvider(props){
    const [user, setUser] = React.useState({});
    const [success , setSuccess] = React.useState(false);
    const [token , setToken ] = React.useState("none")
    return(
        <MyContext.Provider value={[{user , setUser , success , setSuccess , token , setToken}]}>
            {
                props.children
            }
        </MyContext.Provider>
    )
}