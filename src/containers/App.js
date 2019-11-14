import React from 'react';
import style from './App.css';
import Board from '../components/Board';
import sudoku from 'sudoku-umd';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '                                                                                 ',
      board: '                                                                                 '
    };
  }

  newGame = () => {
    const newGameString = sudoku.generate('hard');
    this.setState({board: newGameString, initialBoard: newGameString});
  }

  restartGame = () => {
    this.setState({board: this.state.initialBoard});
  }

  handleChange = (value, index) => {
    if (value > 0 && value <= 9) {
      let newBoard = this.state.board.split('').map((val, i) => {
        if (i == index) {
          return Number(value);
        } 
        
        return val;
      }) ;

      this.setState({ board: newBoard.join('') });
    } 
    else if (value === '') {
      let newBoard = this.state.board.split('').map((val, i) => {
        if (i == index) {
          return '.';
        } 
        
        return val;
      });

      this.setState({ board: newBoard.join('') });
    }
  }

  checkCurrentSolution = () => {
    !sudoku.solve(this.state.board) ? alert('No good, dude!') : alert('Damn good so far!');
  }

  solveGame = () => {
    this.setState({board: sudoku.solve(this.state.initialBoard)})
  }

  render() {
    return(
      <div className={style.container}>
        <h1>Sudoku</h1>
        <Board initialBoard = {this.state.initialBoard} board = {this.state.board} handleChange = {this.handleChange}c />
        <div className={style.buttons}>
          <button onClick={this.newGame}>New Game</button>
          <button onClick={this.restartGame}>Restart</button>
          <button onClick={this.checkCurrentSolution}>Check solution</button>
          <button onClick={this.solveGame}>Solve</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);