import React, { useState } from 'react';
import StockForm from './components/StockForm';
import PredictionResult from './components/PredictionResult';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Stock Price Predictor</h1>
      <StockForm setResult={setResult} />
      <PredictionResult result={result} />
    </div>
  );
}

export default App;
