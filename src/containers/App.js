import React from 'react';
import Board from '../components/Board';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initialBoard: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591….43768192',
            board: '4.51..9787184.96.56.9875...174253869856917...3926.45179.134.756267591....43768192',
        };
    }
    
    render() {
        return (
            <div className='App'>
                <h1>Sudoku</h1>
                <Board initialBoard={this.state.initialBoard} board={this.state.board} />
                <div className='buttons'>
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button>Restart</button>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);