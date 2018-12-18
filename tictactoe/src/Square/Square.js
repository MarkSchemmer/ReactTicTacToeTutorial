import React from 'react'
import './Square.css'

const Square = (props) => {

    const { click, squareNumber, value, isWinningSquare, id } = props
    const [x,y] = squareNumber

    const squareStyles = {
        width:'110px',
        height:'100px',
        border:'1px solid black',
        display:'inline-block',
        margin:'0',
        marginRight:'2px',
        backgroundColor: isWinningSquare ?  'yellow' : ''
    }

    return (
        <div onClick={() => click(x,y) } style={squareStyles} className="square" id={id}>
            { value ? <span>{value}</span> : null}
        </div>
    )
}


export default Square