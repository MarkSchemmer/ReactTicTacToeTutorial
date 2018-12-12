import React, { Component } from 'react';
import Board from './Board/Board'
import PastMoves from './PastMoves/PastMoves'
import * as _ from './Helpers/calculateWinner'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      xIsNext:true,
      history : [{ squares : _.squares() }]
    }

    this.clickSquare = this.clickSquare.bind(this)
    this.togglePlayer = this.togglePlayer.bind(this)
  }

    determineSquareTile = (player) => player ? _.X : _.O   

  
  clickSquare(whichSquare) {
    const { history } = this.state
    let copyOfSquares = history[history.length-1].squares.slice(), idx = whichSquare-1
    let sq = copyOfSquares[idx]

    if(_.calculateWinner(copyOfSquares))
        return 

    if(sq.val===null){
        sq.val = this.determineSquareTile(this.state.xIsNext)
        copyOfSquares[idx] = sq 
        this.setState((prevState) => ({
            history : [ ...prevState.history, { squares : copyOfSquares } ]
        }), () => this.togglePlayer())
    }
}

togglePlayer() {
   this.setState((prevState) => ({
       xIsNext:!prevState.xIsNext
   }))
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Board 
        toggle={this.togglePlayer} 
        determineTile={this.determineSquareTile}
        xIsNext={this.state.xIsNext}
        click={this.clickSquare} 
        history={this.state.history} />
        {/* past moves here, I might have to lift up state to make this work  */}
        <PastMoves history={this.state.history}  />
      </div>
    );
  }
}

export default App;
