import React from 'react';

const Tile = props => (
    <input type='number' name='sudokuInput' className={props.className} min='1' max='9' step='1' maxLength='1' value={props.value} key={props.key} index={props.index} onChange={props.onChange} readOnly={props.readOnly}/>
)

export default Tile;
