import dashboardData from '@/../product/sections/dashboard/data.json'
import { DashboardView } from './components/DashboardView'

export default function DashboardViewPreview() {
  return (
    <DashboardView
      metrics={dashboardData.metrics}
      todaysClasses={dashboardData.todaysClasses}
      upcomingClasses={dashboardData.upcomingClasses}
      creditAlerts={dashboardData.creditAlerts}
      inventoryAlerts={dashboardData.inventoryAlerts}
      onViewClass={(id) => console.log('View class:', id)}
      onViewStudent={(studentId) => console.log('View student:', studentId)}
      onViewInventoryAlert={(alertId) =>
        console.log('View inventory alert:', alertId)
      }
    />
  )
}
