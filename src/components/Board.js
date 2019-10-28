import React from 'react';
import style from './Style.css'
import Tile from './Tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tile = this.props.board.split('').map((number, index) => {
      const value = (number === '.' ? '' : number);
      return (
        <Tile
          key={index}
          index={index}
          value={value}
          onChange={(event) => this.handleChange(event, value, index)}
          readOnly={number === this.props.initialBoard.split('')[index] && number != '.' ? true : false}
          className={number === this.props.initialBoard.split('')[index] && number != '.' ? style.tileinit : style.tile}
        />
      )
    })
    return (
      <div className={`${style.board} board`}>
        <h1>Sudoku</h1>
        <form>{tile}</form>
      </div>
    )
  }

  /*
  handleChange = (event, value, index) => {
    const tileUpdate = this.props.board.split('').map((num, idx) => {
      if(index === idx && value > 0 && value <= 9) {
        value = event.target.value;
        return value
      }

      if(index === idx) {
        return event.target.value;
      }
      return num
    }).join('');
    this.props.boardUpdate(tileUpdate);
  }
*/

  handleChange = (event, value, index) => {
    const tileUpdate = this.props.board.split('').map((num, idx) => {
      if(index === idx) {
        return event.target.value;
      }
      return num
    }).join('');
    this.props.boardUpdate(tileUpdate);
  }
}

export default Board;