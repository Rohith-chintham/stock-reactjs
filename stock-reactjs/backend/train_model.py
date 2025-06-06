# train_model.py
import numpy as np
from sklearn.linear_model import LinearRegression
import pickle

# Sample training data: [open, high, low, volume]
X = np.array([
    [100, 105, 95, 1000000],
    [110, 115, 108, 1200000],
    [120, 125, 118, 1300000],
    [130, 135, 128, 1400000]
])
y = np.array([102, 112, 122, 132])  # Target stock prices

model = LinearRegression()
model.fit(X, y)

# Save model
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained and saved as model.pkl")
