import React from 'react';
import style from './Board.css';
import Tile from './Tile';

class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const singleTile = this.props.board.split('').map((elem, index) => {
      var processedElem = (elem === '.' ? '' : elem);
      //console.log(processedElem, index);
      return <Tile key={index} index={index} value={processedElem} onChange={(event) => this.handleChange(event, processedElem, index)} />

    })
    return (
      <div className={style.BoardCSS}>
        <h1>Board H1</h1>
        <p>Board p</p>
        <form>{singleTile}</form>
        <input type={'button'} value={'TEST'} name={'press'} onClick={this.test} />
      </div>
    )
  }
  test = () => {
    console.log(this.props);
  }

  handleChange = (event, processedElem, index) => {
    this.setState({index: index, value: event.target.value});
    console.log(`${this.state.index} ${this.state.value}`);
  }
}

export default Board;