import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

const Square  = (props) => {

    let { click, squareNumber, value, isWinningSquare, id } = props
    let [x,y] = squareNumber

    let squareStyles = {
        width:'110px',
        height:'100px',
        border:'1px solid black',
        display:'inline-block',
        margin:'0',
        marginRight:'2px',
        backgroundColor: isWinningSquare ?  'yellow' : ''
    }

    return (
        <div onClick={() => click(x,y) } style={squareStyles} className="square" id={`square-${id}`}>
            { value ? <span>{value}</span> : null}
        </div>
    )
}




export default Square
