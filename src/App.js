import React from 'react';
import {useState} from 'react';
import './App.css';

import Dice from './Dice';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)).toString();
}

function generateDiceState(size) {
  return Array.from({length: size}).reduce((accumulator, current, index) => {
    return {
      ...accumulator,
      [index]: {
        selected: false,
        type: '2'
      }
    };
  }, {})
}

function App() {
  const amountOfDice = 5;
  const [dice, setDice] = useState(generateDiceState(amountOfDice));

  return (
    <main>
      {
        Array.from({length: amountOfDice}).map((value, index) =>
          <Dice key={index} type={dice[index].type} selected={dice[index].selected} click={() => setDice({
            ...dice,
            [index]: {
              ...dice[index],
              selected: !dice[index].selected
            }
          })}></Dice>
        )
      }

      <input type='button' className='roll' value='ROLL' onClick={() => {
        setDice({
          ...dice,
          ...Object.fromEntries(Object.entries(dice).filter(([index, value]) => value.selected).map(([index, value]) => ([index, {
            ...value,
            selected: false,
            type: getRandomInt(5)
          }])))
        })
      }}></input>
    </main>
  );
}

export default App;
