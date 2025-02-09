import Sidebar from './Sidebar'
import WeatherDisplay from './WeatherDisplay'

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <WeatherDisplay />
    </div>
  )
}