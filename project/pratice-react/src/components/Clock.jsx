import React from "react";

// State is "data that changes"
export default class Clock extends React.Component{
    render(){
        
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString(this.props.locale)}.</h2>
            </div>
        )
    }
}

