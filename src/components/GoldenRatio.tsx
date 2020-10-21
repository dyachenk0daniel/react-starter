import React, { useState } from "react";

export default function GoldenRatio() {
  const [initialX, setInitialX] = useState<number>(2);
  const [finalX, setFinalX] = useState<number>(20);
  const [accuracy, setAccuracy] = useState<number>(2);
  //else return "Бесконечный цикл";

  const coefficient = (1 + Math.sqrt(5)) / 2;

  const func = (x: number) => Math.pow(100 - x, 2);

  const findMin = (a: number, b: number, e: number) => {
    let x1: number, x2: number;

    while (true) {
      x1 = b - (b - a) / coefficient;
      x2 = a + (b - a) / coefficient;
      if (func(x1) >= func(x2)) {
        a = x1;
      } else {
        b = x2;
      }
      if (Math.abs(b - a) < e) break;
    }
    return (a + b) / 2;
  };

  return (
    <>
      <p>
        <label style={{ display: "block" }} htmlFor="initialX">
          Начальное значение X
        </label>
        <input
          value={String(initialX)}
          onChange={(e) => setInitialX(+e.target.value)}
          type="number"
          placeholder="Введите начальное значение X"
          style={{ width: "220px" }}
          name="initialX"
        />
      </p>
      <p>
        <label style={{ display: "block" }} htmlFor="finalX">
          Конечное значение X
        </label>
        <input
          value={String(finalX)}
          onChange={(e) => setFinalX(+e.target.value)}
          type="number"
          placeholder="Введите конечное значение X"
          style={{ width: "220px" }}
          name="finalX"
        />
      </p>
      <p>
        <label style={{ display: "block" }} htmlFor="accuracy">
          Введите точность
        </label>
        <input
          value={String(accuracy)}
          onChange={(e) => setAccuracy(+e.target.value)}
          type="number"
          placeholder="Введите конечное значение X"
          style={{ width: "220px" }}
          name="accuracy"
        />
      </p>

      <p>
        Минамальное расчтанное значение функции в заддном диапазоне ={" "}
        {findMin(initialX, finalX, accuracy)}
      </p>
    </>
  );
}
