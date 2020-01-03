import React, { Component } from 'react'
import Heading from './home-comps/heading'
import Homepage from './home-comps/homepage'

export default class home extends Component {
    render() {
        return (
            <React.Fragment>
                <Homepage/>
            </React.Fragment>
        )
    }
}
