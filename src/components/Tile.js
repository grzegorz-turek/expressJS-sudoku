import React from 'react';

const Tile = props => {
  return (
    <input
      type='number'
      min='1'
      max='9'
      className={props.className}
      value={props.value}
      onChange={(event) => props.handleChange(event.target.value, props.index)}
      disabled={props.disabled}
    />
  );
};

export default Tile;