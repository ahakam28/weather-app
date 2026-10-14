# 🌤️ Simple Weather App

A lightweight and responsive Weather Application built with JavaScript that fetches real-time weather data for any city using the **Open-Meteo API**.

## ✨ Features
- **Real-Time Weather Data:** Displays current temperature, relative humidity, and wind speed.
- **City Search:** Search weather conditions for any city globally.
- **Default Location:** Automatically falls back to a default location (**Feni**) if the search input is left empty.
- **Keyboard Shortcut:** Press `Enter` in the input field to trigger the search instantly.
- **Auto Load:** Automatically fetches and displays default weather data when the page loads.

---

## 🛠️ Technologies Used
- **HTML5** (Structure)
- **CSS3** (Styling)
- **JavaScript (ES6+)** (DOM Manipulation & Async/Await Fetch API)
- **APIs:** 
  - [Open-Meteo Geocoding API](https://open-meteo.com/) (to fetch latitude & longitude from city names)
  - [Open-Meteo Forecast API](https://open-meteo.com/) (to fetch real-time weather metrics)

---

## 📂 Project Structure
```text
📦 weather-app
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┗ 📜 script.js