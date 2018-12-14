import React from 'react'


class Move extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            canHighlight:false 
        }
    }

    handleClick(move){

        this.setState({
            canHighlight : true 
        }, () => {
            this.props.jumpTo(move, 'FROM MOVE')
        })
    }



    render() {

        const buttonStyle = {
            padding:'5px'
        }

        const {  move, desc } = this.props
        return (
            <button
            onBlur={() => this.setState({ canHighlight : false })}  
            style={buttonStyle} onClick={() => this.handleClick(move)}>
              {this.state.canHighlight ? <strong>{desc}</strong> : desc  } 
            </button>
        )
    }
}


export default Move 