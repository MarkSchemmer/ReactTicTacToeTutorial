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
            this.props.jumpTo(move)
        })
       
    }

    render() {

        const buttonStyle = {
            padding:'5px'
        }

        const { jumpTo, move, desc } = this.props
        return (
            <button  style={buttonStyle} onClick={() => jumpTo(move)}>
              {this.state.canHighlight ? <strong>{desc}</strong> : desc  } 
            </button>
        )
    }
}


export default Move 