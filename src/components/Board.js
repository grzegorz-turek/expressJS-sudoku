import React from 'react';
import Tile from './Tile';
import style from '../containers/App.css';

const Board = props => {
  const value = props.board.split('').map((number, index) => {
    return (
      <Tile
        key={index}
        index={index}
        className={number === props.initialBoard.split('')[index] && number != '.' ? style.tileinit : style.tile}
        value={number === '.' ? '' : number}
        disabled={number === props.initialBoard.split('')[index] && number != '.' ? true : false}
        handleChange={props.handleChange}
      />
    );
  });
  return <div className={style.board}>{value}</div>
};

export default Board;