"use client"

import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, CloudSnow, Wind } from 'lucide-react'

interface WeatherData {
  location: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate weather data for Abuja, Nigeria
    // In a real app, you would fetch from a weather API
    const mockWeatherData: WeatherData = {
      location: "Abuja, Nigeria",
      temperature: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12
    }

    // Simulate API delay
    setTimeout(() => {
      setWeather(mockWeatherData)
      setLoading(false)
    }, 1000)
  }, [])

  const getWeatherIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase()
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return <Sun className="w-5 h-5 text-yellow-500" />
    } else if (conditionLower.includes('rain')) {
      return <CloudRain className="w-5 h-5 text-blue-500" />
    } else if (conditionLower.includes('snow')) {
      return <CloudSnow className="w-5 h-5 text-blue-300" />
    } else if (conditionLower.includes('wind')) {
      return <Wind className="w-5 h-5 text-gray-500" />
    } else {
      return <Cloud className="w-5 h-5 text-gray-400" />
    }
  }

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-gray-400">
        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm">Loading weather...</span>
      </div>
    )
  }

  if (!weather) {
    return null
  }

  return (
    <div className="flex items-center space-x-3 text-gray-400">
      <div className="flex items-center space-x-2">
        {getWeatherIcon(weather.condition)}
        <div className="text-sm">
          <div className="font-semibold">{weather.temperature}°C</div>
          <div className="text-xs">{weather.condition}</div>
        </div>
      </div>
      <div className="text-xs">
        <div>{weather.location}</div>
        <div>H: {weather.humidity}% | W: {weather.windSpeed}km/h</div>
      </div>
    </div>
  )
}

















