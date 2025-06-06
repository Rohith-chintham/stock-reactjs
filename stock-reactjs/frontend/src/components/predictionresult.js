import React from 'react';

function PredictionResult({ result }) {
  return (
    <div>
      <h3>Predicted Stock Price:</h3>
      <p>{result !== null ? `$${result}` : 'No prediction yet'}</p>
    </div>
  );
}

export default PredictionResult;
