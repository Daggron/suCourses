import React, { Component } from 'react'
import Homepage from './home-comps/homepage'

export default class home extends Component {
    componentDidMount(){
        console.log(localStorage.getItem('user'));
    }
    render() {
        return (
            <React.Fragment>
                <Homepage/>
            </React.Fragment>
        )
    }
}
