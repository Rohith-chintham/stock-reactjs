git clone https://github.com/Rohith-chintham/stock-reactjs.git

cd stock-reactjs

cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python train_model.py

python app.py

cd stock-reactjs

cd frontend

npm install

npm start
