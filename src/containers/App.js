import React from 'react';
import Board from '../components/Board';
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd';
import style from '../components/Style.css'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initialBoard: '                                                                                 ',
            board: '                                                                                 '
        };
    }
        
    render() {
        return (
            <div className={style.App}>
                <Board initialBoard={this.state.initialBoard} board={this.state.board} boardUpdate={(board) => this.boardUpdate(board)}/>
                <div className={style.buttons}>
                    <button onClick={this.newGame}>New Game</button>
                    <button onClick={this.restartGame}>Restart</button>
                    <button onClick={this.checkCurrentSolution}>Check solution</button>
                    <button onClick={this.solveGame}>Solve</button>
                </div>
            </div>
        );
    }

    newGame = () => {
        const newGameString = sudoku.generate('easy');
        this.setState({board: newGameString, initialBoard: newGameString});
    }

    restartGame = () => {
        this.setState({board: this.state.initialBoard});
    }

    checkCurrentSolution = () => {
        !sudoku.solve(this.state.board) ? alert('No good, dude!') : alert('Damn good so far!');
    }

    solveGame = () => {
        this.setState({board: sudoku.solve(this.state.initialBoard)})

    }

    boardUpdate = (board) => {
        this.setState({board});
    }
}

export default hot(module)(App);