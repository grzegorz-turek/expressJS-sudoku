import React from 'react';
import style from './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                // JESLI PRZYPNĘ DO HANDLERA ONCHANGE FUNKCJE TEST Z TEGO KOMPONENTU (KOD PONIŻEJ), WYŚWIETLĘ NUMER INDEKSU I STAN KLIKANEGO TAILA
                <input type={'number'} name={'sudokuInput'} className={`${style.TileCSS} board`} max={'9'} min={'1'} value={this.props.value} key={this.props.key} index={this.props.index} onChange={this.test} />

                // JEŚLI PRZYPNĘ FUNKCJĘ PRZEKAZANĄ W PROPSACH Z KOMPONENTU BOARD (KOD PONIŻEJ), NIC NIE WYŚWIETLĘ
                //<input type={'number'} name={'sudokuInput'} className={`${style.TileCSS} board`} max={'9'} min={'1'} value={this.props.value} key={this.props.key} index={this.props.index} onChange={this.props.onChange} />
        )
    }

    test = (e) => {
        console.log(this.props);
        e.stopPropagation();
    }
}

/*
const Tile = (props) => {
    <input type={'number'} name={'sudokuInput'} className={`${style.TileCSS} board`} max={'9'} min={'1'} value={props.value} key={props.key} index={props.index} onChange={props.onChange} />
}
*/
export default Tile;
