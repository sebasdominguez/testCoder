import React, { Component } from 'react'

export default class Name extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: this.props.nombre
        }
    }

    handleName = () => {
        this.setState({
            name: 'Sebastian Dominguez'
        })
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={this.handleName}>CHANGE NAME</button>
                <h2>{this.state.name}</h2>
            </React.Fragment>
        )
    }

}