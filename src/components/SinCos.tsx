import React, { useState } from "react";

export default function SinCos() {
  type TOperation = (x: number) => number;
  type TResearchSinCosX = (
    xMin: number,
    xMax: number,
    operation: TOperation
  ) => number;

  const [xMin, setXMin] = useState<number>(0);
  const [xMax, setXMax] = useState<number>(0);

  const researchSinCosX: TResearchSinCosX = (xMin, xMax, operation) => {
    let cosMax: number = operation(xMin);
    let x: number = xMin;

    while (x < xMax) {
      x += 0.2;
      const tempCos: number = operation(x);
      if (cosMax > tempCos) break;
      cosMax = tempCos;
    }

    return cosMax;
  };

  return (
    <div>
      <p>
        <label style={{ display: "block" }} htmlFor="xMin">
          Начальное значение X
        </label>
        <input
          value={String(xMin)}
          onChange={(e) => setXMin(+e.target.value)}
          type="number"
          placeholder="Введите начальное значение X"
          style={{ width: "220px" }}
        />
      </p>
      <p>
        <label style={{ display: "block" }} htmlFor="xMax">
          Конечное значение X
        </label>
        <input
          value={String(xMax)}
          onChange={(e) => setXMax(+e.target.value)}
          type="number"
          placeholder="Введите конечное значение X"
          style={{ width: "220px" }}
        />
      </p>

      <p>
        Максимальное значение Cos(X): {researchSinCosX(+xMin, +xMax, Math.cos)}
      </p>
      <p>
        Максимальное значение Sin(X): {researchSinCosX(+xMin, +xMax, Math.sin)}
      </p>
    </div>
  );
}
