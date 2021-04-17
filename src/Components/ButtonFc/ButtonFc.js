import React from 'react'
import './button.css'

const ButtonFc = ({text, color, padding, children}) => {


    return(
        <div>
        { children && children.length ?
            <React.Fragment>
                <div>VARIOS CHILDRENS (ARRAY):</div>
                {children.map((child)=> child)}
                <button style={{backgroundColor: color, color: 'white', padding: padding}}>
                {text}
                </button>
            </React.Fragment>
            :   
            <React.Fragment>
                <button style={{backgroundColor: color, color: 'white', padding: padding}}>
                    {text}
                </button>
                <div>1 SOLO CHILDREN (OBJ):</div>
                {children}
            </React.Fragment>
        }
        </div>   
    )
}

export default ButtonFc