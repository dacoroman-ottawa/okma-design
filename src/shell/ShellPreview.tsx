import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const navigationItems = [
    { label: 'Dashboard', href: '/dashboard', isActive: true },
    { label: 'People', href: '/people' },
    { label: 'Classes', href: '/classes' },
    { label: 'Payments', href: '/payments' },
    { label: 'Inventory', href: '/inventory' },
  ]

  const user = {
    name: 'Alex Morgan',
    avatarUrl: undefined,
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      user={user}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onLogout={() => console.log('Logout')}
    >
      <div className="p-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Section content will render here. This preview shows how the shell wraps your section screens.
        </p>
      </div>
    </AppShell>
  )
}
