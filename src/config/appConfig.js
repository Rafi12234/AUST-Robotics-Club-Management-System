const appConfig = {
  appName: 'AUST Robotics Club Management System',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  env: import.meta.env.MODE,
}

export default appConfig
