# SeizureX Project

## Project Description

SeizureX is an innovative web-based tool designed for the detection and prediction of cerebral seizures using electroencephalography (EEG) data analysis. This system is intended to assist healthcare professionals and patients in monitoring and anticipating seizure episodes, thereby improving epilepsy management and the quality of life for those affected by this condition.

## Table of Contents

- [Project Description](#project-description)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Authors](#authors)

## Project Structure

The project contains the following files and directories:

- `app.py`: The core of the Flask application, it manages server logic and API routes.
- `requirements.txt`: Specifies all required Python dependencies.
- `Dockerfile`: Provides instructions for Dockerizing the application.
- `static/`: Hosts static files like CSS and JavaScript.
- `templates/`: Contains HTML templates for the application frontend.
- `data.csv`: A sample data set used by the application.
- `Epilepsy.h5`: A machine learning model trained to detect seizures.
- `uploaded_file.csv`: An example file that users can upload for analysis.
- `LSTM_Epilepsy.ipynb`: A Jupyter notebook containing the code used to train the machine learning model.

## Installation

### Prerequisites

- Python 3.8 or higher.
- Docker (for container deployment).

### Environment Setup

Clone or download the SeizureX repository and build the Docker image with:

    docker build -t seizurex_project .

### Execution with Docker

Start the application with:

    docker run -p 5000:5000 seizurex_project

The application will be accessible at http://localhost:5000.

## Usage

SeizureX allows users to upload EEG data and use the machine learning model to predict the presence of seizures. Usage example:

1. Access the web interface through http://localhost:5000.
2. Upload the EEG data file using the provided user interface.
3. The system will process the data and provide a prediction on the likelihood of a seizure.

## Future Improvements

In future releases, SeizureX will integrate advanced graphical tools to provide an enriched user experience and more intuitive interpretation of results. Furthermore, detailed representations of epileptic seizure patterns will be explored through cutting-edge data visualization technologies.

## Authors

- Brianna Ayelen Balam Velasco
- Jesus Javier Can Noh
- Mauricio Pacheco Lizama
- Juan José Tec Tun
