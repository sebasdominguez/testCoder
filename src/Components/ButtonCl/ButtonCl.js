import React from 'react'
import ButtonFc from '../ButtonFc/ButtonFc'

export default class ButtonCl extends React.Component{

    constructor(){
        super()
        this.state = {
            type: 'CLASS COMP',
            num: 0
        }
    }

    handleNum = () => {
        this.setState({
            num: this.state.num+1
        })
    }

    componentWillMount(){
        //va a suceder justo antes del primer montaje
    }

    componentDidMount(){
        //va a suceder justo despues del primer montaje. POR EJEMPLO: asincronia
    }

    render(){
        return(
            <React.Fragment>
                <div onClick={this.handleNum} style={{border: '2px dotted white', padding: 20, cursor: 'pointer'}}>
                    HANDLE NUM
                </div>
                <ButtonFc text={this.props.text} color={this.props.color} padding={this.props.padding}>
                    <div>
                        SOY UNICO CHILDREN EN {this.state.type}, NUMERO {this.state.num}
                    </div>
                </ButtonFc>
            </React.Fragment>
        )
    }
}