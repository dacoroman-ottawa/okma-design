import data from '@/../product/sections/people/data.json'
import { StudentsList } from './components/StudentsList'

export default function StudentsListPreview() {
  return (
    <StudentsList
      students={data.students}
      instruments={data.instruments}
      studentAvailability={data.studentAvailability}
      enrollments={data.enrollments}
      teachers={data.teachers}
      onViewStudent={(id) => console.log('View student:', id)}
      onAddStudent={() => console.log('Add new student')}
      onEditStudent={(id) => console.log('Edit student:', id)}
      onDeleteStudent={(id) => console.log('Delete student:', id)}
    />
  )
}
