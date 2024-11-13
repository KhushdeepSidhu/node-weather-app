# Node.js Weather Application

A simple and powerful weather application built with Node.js that fetches real-time weather information for any location in the world. The app integrates with external APIs to provide accurate weather data based on user-provided locations.

## Features

- **Global Weather Search**: Fetch weather details for any location around the world.
- **Real-Time Data**: Provides up-to-date weather information, including temperature, humidity, and conditions.
- **Geocoding Integration**: Uses the Mapbox API to convert location names into geographical coordinates.
- **Weather Data**: Calls the Weatherstack API using coordinates to retrieve the current weather for the specified location.

## Technologies Used

- **Node.js**: Backend server and application logic.
- **Mapbox API**: For geocoding, transforming location names into latitude and longitude.
- **Weatherstack API**: Fetches current weather details based on geolocation data.

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

- Node.js installed on your system.
- API keys for:
  - [Mapbox API](https://www.mapbox.com/) for geocoding.
  - [Weatherstack API](https://weatherstack.com/) for fetching weather data.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KhushdeepSidhu/node-weather-app.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd node-weather-app
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Set up environment variables**
   - Create a .env file in the root directory.
   - Add your Mapbox and Weatherstack API keys:
   ```
   MAPBOX_API_KEY=your_mapbox_api_key
   WEATHERSTACK_API_KEY=your_weatherstack_api_key
   ```

### Running the Application

Start the application with:

```
npm start
```

### Usage

1. After starting the application, you can make requests to get weather data.
2. **Specify a location**: Enter a location name, and the app will use the Mapbox API to geocode it.
3. **Get weather details**: The app retrieves the current weather for the location using Weatherstack.
