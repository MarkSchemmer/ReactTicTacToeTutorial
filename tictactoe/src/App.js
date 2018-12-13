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

const multiDimTicTacScoreBoard = [...Array(3).keys()].map(level => [...Array(3).keys()].map(subLevel => null))

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      xIsNext:true,
      history :  [ { squares : multiDimTicTacScoreBoard, move:null } ] ,
      stepNumber:0,
    }
    this.clickSquare = this.clickSquare.bind(this)
    this.jumpTwo = this.jumpTwo.bind(this)
  }


  
  clickSquare(x,y) {
    let history = this.state.history.slice(0, this.state.stepNumber+1)
    let current = history[history.length-1]
    let squares = current.squares.slice().map(subLevels => subLevels.slice())
    if(_.calculateWinner(squares))
        return 

      if(squares[x][y] === null){ 
        squares[x][y] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history : history.concat( { squares: squares, move:[x,y] } ), 
            stepNumber : history.length, 
            xIsNext : !this.state.xIsNext
        })
      }
}

togglePlayer() {
   this.setState((prevState) => ({
       xIsNext:!prevState.xIsNext
   }))
}


jumpTwo(step){
  this.setState({
    stepNumber : step,
    xIsNext : ( step % 2 ) === 0 
  })
}


  render() {
    console.log(this.state.history[this.state.stepNumber])
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <PastMoves 
          jumpTo={this.jumpTwo} history={this.state.history}  />
        <Board 
            toggle={this.togglePlayer} 
            xIsNext={this.state.xIsNext}
            click={this.clickSquare} 
            squares={this.state.history[this.state.stepNumber].squares} />
      </div>
    );
  }
}

export default App;
