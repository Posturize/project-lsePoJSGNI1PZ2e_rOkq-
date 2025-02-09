import { Button } from '@/components/ui/button'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Weather Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li><Button variant="ghost" className="w-full justify-start">Home</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Forecast</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Settings</Button></li>
        </ul>
      </nav>
    </div>
  )
}