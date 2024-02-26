from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib

# Include the trained model 
model = joblib.load('trainedModel.pkl')

app = FastAPI()

class EEGData(BaseModel):
    signals: list

@app.post("/predict/")
def predict_seizure(data: EEGData):
    try:
        prediction = model.predict([data.signals])
        return {"prediction": prediction}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
