from flask import Flask, render_template, request
import numpy as np
from keras.models import load_model
import pandas as pd

app = Flask(__name__)

# Load the pre-trained model
model = load_model('Epilepsy.h5')

def preprocess_data(file_path):
    df = pd.read_csv(file_path)
    X = df.values
    X = X[:, 1:-1]

    X = X.reshape(-1, 178, 1)
    X = X.astype(np.float32)

    return X

def predict_epilepsy(data):
    data = (data[:, ::4] - data.mean()) / data.std()
    y_pred = model.predict(data)
    umbral = 0.5
    predictions_boolean = y_pred[:, -1] >= umbral

    # Convert boolean predictions to 'Detected' or 'Not detected' strings
    predictions_descriptive = ['Detected' if pred else 'Not detected' for pred in predictions_boolean]

    return predictions_descriptive

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get the uploaded file
        file = request.files['file']

        # Save the file
        file_path = 'uploaded_file.csv'
        file.save(file_path)

        # Preprocess the data
        X_test = preprocess_data(file_path)

        # Make predictions
        predictions = predict_epilepsy(X_test)

        # Now predictions is a list of 'Detected' or 'Not detected'
        return render_template('result.html', predictions=predictions)
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
