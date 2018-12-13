import React, { Component } from 'react';
import Board from './Board/Board'
import PastMoves from './PastMoves/PastMoves'
import * as _ from './Helpers/calculateWinner'
//import logo from './logo.svg';
import './App.css';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      xIsNext:true,
      history :  [ { squares : Array(9).fill(null) } ] ,
      stepNumber:0,
    }
    this.clickSquare = this.clickSquare.bind(this)
    this.jumpTwo = this.jumpTwo.bind(this)
  }


  
  clickSquare(idx) {
    let history = this.state.history.slice(0, this.state.stepNumber+1)
    let current = history[history.length-1]
    let squares = current.squares.slice()
    if(_.calculateWinner(squares))
        return 

      if(squares[idx] === null){ 
        squares[idx] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history : history.concat( { squares: squares } ), 
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
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
