import axios from 'axios';

const API_URL = 'http://your-api-url.com'; // 

const SeizureAPI = axios.create({
  baseURL: API_URL,
});

export const fetchEEGData = async () => {
  try {
    const response = await SeizureAPI.get('/eeg-data');
    return response.data;
  } catch (error) {
    console.error('Error retrieving EEG data:', error);
    throw error;
  }
};

//add more function when API is ready
