# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

# Load the trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route('/')
def home():
    return "Stock Price Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        open_price = float(data['open'])
        high = float(data['high'])
        low = float(data['low'])
        volume = float(data['volume'])

        features = np.array([[open_price, high, low, volume]])
        prediction = model.predict(features)

        return jsonify({'prediction': round(prediction[0], 2)})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
