import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WeatherDisplay() {
  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold mb-6">Current Weather</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">72°F</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">45%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wind Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">10 mph</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}