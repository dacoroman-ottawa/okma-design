import data from '@/../product/sections/people/data.json'
import { TeachersList } from './components/TeachersList'

export default function TeachersListPreview() {
  return (
    <TeachersList
      teachers={data.teachers}
      instruments={data.instruments}
      teacherAvailability={data.teacherAvailability}
      enrollments={data.enrollments}
      students={data.students}
      onViewTeacher={(id) => console.log('View teacher:', id)}
      onAddTeacher={() => console.log('Add new teacher')}
      onEditTeacher={(id) => console.log('Edit teacher:', id)}
      onDeleteTeacher={(id) => console.log('Delete teacher:', id)}
    />
  )
}
