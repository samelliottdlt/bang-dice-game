import React from 'react';

function getDiceContents(type) {
  switch(type) {
    case '0': {
      return '1';
    }
    case '1': {
      return '2';
    }
    case '2': {
      return '🍺';
    }
    case '3': {
      return '🧨';
    }
    case '4': {
      return '🏹';
    }
  }
}

function Dice(props) {
  return (
    <span onClick={() => props.click()} className={props.className} style={
      {
        'border': '2px solid black',
        'height': 80,
        'width': 80,
        'fontSize': 50,
        'backgroundColor': props.selected ? 'yellow' : '',
        'margin': '5px'
      }
    }>
      {getDiceContents(props.type)}
    </span>
  );
}

export default Dice;
