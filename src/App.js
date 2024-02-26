import React, { useState } from 'react';
import { Typography, Container, Button, CircularProgress } from '@mui/material';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling

function App() {
  const [loading, setLoading] = useState(false);
  const [eegData, setEEGData] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleDataUpload = async () => {
    try {
      setLoading(true);
      // Simulate data loading (replace with actual data loading logic)
      const response = await axios.get('https://api.example.com/eeg-data');
      setEEGData(response.data);

      // Simulate prediction retrieval (replace with actual prediction logic)
      const predictionsResponse = await axios.post('https://api.example.com/predictions', response.data);
      setPredictions(predictionsResponse.data);
    } catch (error) {
      console.error('Error loading data or making predictions:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container className="app-container">
      <div className="logo-container">
        {/* Here you can add your logo */}
        <img src="logo.png" alt="SeizureX Logo" className="logo" />
      </div>
      <div className="content">
        <Typography variant="h1" className="title">Welcome to SeizureX</Typography>
        <Typography variant="body1" className="subtitle">An application for the detection and prediction of brain seizures.</Typography>
        
        <Button variant="contained" onClick={handleDataUpload} disabled={loading} className="upload-button">
          {loading ? <CircularProgress size={24} /> : 'Upload EEG Data'}
        </Button>

        {eegData && (
          <div className="data-container">
            <Typography variant="h2" className="data-title">EEG Data</Typography>
            <XYPlot width={500} height={300} className="chart">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={eegData} />
            </XYPlot>
          </div>
        )}

        {predictions.length > 0 && (
          <div className="predictions-container">
            <Typography variant="h2" className="predictions-title">Predictions</Typography>
            <ul className="predictions-list">
              {predictions.map((prediction, index) => (
                <li key={index} className="prediction">{prediction}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;
