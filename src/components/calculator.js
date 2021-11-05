/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    next: null,
    total: null,
  });

  function handler(e) {
    setState({ ...state, ...calculate(state, e.target.innerText) });
  }

  const { next, total } = state;
  return (
    <div className="common">
      <div className="math">Lets do some Math!</div>
      <div className="body">
        <div>
          <div data-testid="calculator-display" className="screen">
            {
              next || (total || '0')
            }
          </div>
          <div className="calculatorKeys">
            <button type="button" onClick={handler}>AC</button>
            <button type="button" onClick={handler}>+/-</button>
            <button type="button" onClick={handler}>%</button>
            <button type="button" onClick={handler} className="orange">÷</button>
            <button type="button" onClick={handler}>7</button>
            <button type="button" onClick={handler}>8</button>
            <button type="button" onClick={handler}>9</button>
            <button type="button" onClick={handler} className="orange">x</button>
            <button type="button" onClick={handler}>4</button>
            <button type="button" onClick={handler}>5</button>
            <button type="button" onClick={handler}>6</button>
            <button type="button" onClick={handler} className="orange">-</button>
            <button type="button" onClick={handler}>1</button>
            <button type="button" onClick={handler}>2</button>
            <button type="button" onClick={handler}>3</button>
            <button type="button" onClick={handler} className="orange">+</button>
            <button type="button" onClick={handler} className="zero">0</button>
            <button type="button" onClick={handler}>.</button>
            <button type="button" onClick={handler} className="orange">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
