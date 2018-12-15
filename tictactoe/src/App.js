import React, { Component } from 'react';
import Board from './Board/Board'
import PastMoves from './PastMoves/PastMoves'
import * as _ from './Helpers/calculateWinner'
//import logo from './logo.svg';
import './App.css';

/*


  Adding X,Y coordinates for tic tac toe... 

  the current issue is that I only have a single dimensional array.

  I could hard code the coordinates or I could change the program to work with 
  multidimensions 

  I solved this issue by making squares a multi dimensional array
  then just passing through the right index to the clickSquare function
  and in the calculateWinner function I just flattened the multi dimensional array 


*/

const multiDimTicTacScoreBoard = [...Array(3).keys()]
.map(level => [...Array(3).keys()]
.map(subLevel => ({ _id : Math.floor(Date.now()*Math.random(100)),  
                    val : null, 
                    coor:null, 
                    isWinningSquare:false}) ))

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      xIsNext:true,
      history :  [ { squares : multiDimTicTacScoreBoard, move:0, coordinates:null } ] ,
      stepNumber:0,
      hasGameToStartAtTop:true 
    }
    this.clickSquare = this.clickSquare.bind(this)
    this.jumpTwo = this.jumpTwo.bind(this)
    this.toggleMoves = this.toggleMoves.bind(this)
    this.winningSquares = this.winningSquares.bind(this)
  }


  toggleMoves () {

    let newHistory = this.state.history.reverse()

    this.setState( (prevState) => ({
      history : newHistory, 
    }))
  }

  clickSquare(x,y) {
    let history = JSON.parse(JSON.stringify(this.state.history))
    let current = history[history.length-1]
    let squares = current.squares.slice().map(subLevels => JSON.parse(JSON.stringify(subLevels)))
    if(_.calculateWinner(squares))
        return 

      if(squares[x][y].val === null){ 
        squares[x][y].val = this.state.xIsNext ? 'X' : 'O'
        squares[x][y].coor = [x,y]
        this.setState( (prevState) => ({
            history : prevState.history.concat( { squares: squares, move: history.length , coordinates:[x,y] } ), 
            stepNumber : history.length, 
            xIsNext : !this.state.xIsNext
        }))
      }
}

togglePlayer() {
   this.setState((prevState) => ({
       xIsNext:!prevState.xIsNext
   }))
}


jumpTwo(step, MOVE=''){
  this.setState({
    stepNumber : step,
    xIsNext : ( step % 2 ) === 0 
  })
}

winningSquares(_squares){
  let history = JSON.parse(JSON.stringify(this.state.history))
  let current = history[history.length-1]
  let squares = current.squares.slice().map(subLevels => JSON.parse(JSON.stringify(subLevels)))
  const [a, b, c] = _squares
  let arr = [a,b,c]

  arr.forEach(ele => {
    ele.isWinningSquare = true
    let x = ele.coor[0], y = ele.coor[1] 
    squares[x][y] = ele 
  })
  current.squares = squares
  history[history.length-1] = current
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <PastMoves 
          jumpTo={this.jumpTwo} 
          history={this.state.history} 
          toggle={this.toggleMoves}  />
        <Board 
            toggle={this.togglePlayer} 
            xIsNext={this.state.xIsNext}
            click={this.clickSquare} 
            winningSquares={this.winningSquares}
            squares={this.state.history[this.state.stepNumber].squares} />
      </div>
    );
  }
}

export default App;
