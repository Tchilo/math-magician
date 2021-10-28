/* eslint-disable react/no-unused-state */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
    };

    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div>
        <div className="screen">
          {
            next || (total || '0')
          }
        </div>
        <div className="calculatorKeys">
          <button type="button" onClick={this.handler}>AC</button>
          <button type="button" onClick={this.handler}>+/-</button>
          <button type="button" onClick={this.handler}>%</button>
          <button type="button" onClick={this.handler} className="orange">÷</button>
          <button type="button" onClick={this.handler}>7</button>
          <button type="button" onClick={this.handler}>8</button>
          <button type="button" onClick={this.handler}>9</button>
          <button type="button" onClick={this.handler} className="orange">x</button>
          <button type="button" onClick={this.handler}>4</button>
          <button type="button" onClick={this.handler}>5</button>
          <button type="button" onClick={this.handler}>6</button>
          <button type="button" onClick={this.handler} className="orange">-</button>
          <button type="button" onClick={this.handler}>1</button>
          <button type="button" onClick={this.handler}>2</button>
          <button type="button" onClick={this.handler}>3</button>
          <button type="button" onClick={this.handler} className="orange">+</button>
          <button type="button" onClick={this.handler} className="zero">0</button>
          <button type="button" onClick={this.handler}>.</button>
          <button type="button" onClick={this.handler} className="orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
