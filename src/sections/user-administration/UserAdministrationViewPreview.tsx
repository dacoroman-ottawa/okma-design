import userData from '@/../product/sections/user-administration/data.json'
import { UserAdministrationView } from './components/UserAdministrationView'

export default function UserAdministrationViewPreview() {
  return (
    <UserAdministrationView
      users={userData.users}
      onViewUser={(id) => console.log('View user:', id)}
      onEditUser={(id) => console.log('Edit user:', id)}
      onDeleteUser={(id) => console.log('Delete user:', id)}
      onAddUser={() => console.log('Add user')}
      onToggleStatus={(id) => console.log('Toggle status:', id)}
      onSendResetLink={(id) => console.log('Send reset link:', id)}
    />
  )
}
