import React, { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("0");
  const [previous, setPrevious] = useState(null);
  const [operation, setOperation] = useState(null);

  const inputNumber = (num) => {
    if (current === "0") {
      setCurrent(num.toString());
    } else {
      setCurrent(current + num);
    }
  };

  const chooseOperation = (op) => {
    setPrevious(current);
    setOperation(op);
    setCurrent("0");
  };

  const calculate = () => {
    const prev = parseFloat(previous);
    const curr = parseFloat(current);

    if (isNaN(prev) || isNaN(curr)) return;

    let result;

    switch (operation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        if (curr === 0) {
          alert("Cannot divide by zero");
          clearAll();
          return;
        }
        result = prev / curr;
        break;
      default:
        return;
    }

    setCurrent(result.toString());
    setPrevious(null);
    setOperation(null);
  };

  const clearAll = () => {
    setCurrent("0");
    setPrevious(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>

      <div className="display">{current}</div>

      <div className="buttons">
        <button onClick={clearAll}>C</button>
        <button onClick={() => chooseOperation("/")}>÷</button>
        <button onClick={() => chooseOperation("*")}>×</button>
        <button onClick={() => chooseOperation("-")}>−</button>

        <button onClick={() => inputNumber(7)}>7</button>
        <button onClick={() => inputNumber(8)}>8</button>
        <button onClick={() => inputNumber(9)}>9</button>
        <button onClick={() => chooseOperation("+")}>+</button>

        <button onClick={() => inputNumber(4)}>4</button>
        <button onClick={() => inputNumber(5)}>5</button>
        <button onClick={() => inputNumber(6)}>6</button>

        <button onClick={() => inputNumber(1)}>1</button>
        <button onClick={() => inputNumber(2)}>2</button>
        <button onClick={() => inputNumber(3)}>3</button>

        <button onClick={() => inputNumber(0)}>0</button>
        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;