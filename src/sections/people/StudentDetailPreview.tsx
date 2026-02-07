import data from '@/../product/sections/people/data.json'
import { StudentDetail } from './components/StudentDetail'

export default function StudentDetailPreview() {
  // Preview with Lucas Martin (has multiple enrollments)
  const student = data.students[1]

  return (
    <StudentDetail
      student={student}
      instruments={data.instruments}
      availability={data.studentAvailability[student.id] || []}
      enrollments={data.enrollments}
      teachers={data.teachers}
      onBack={() => console.log('Navigate back to students list')}
      onEdit={() => console.log('Edit student:', student.id)}
      onDelete={() => console.log('Delete student:', student.id)}
      onUpdateAvailability={(slots) =>
        console.log('Update availability:', student.id, slots)
      }
      onViewTeacher={(id) => console.log('View teacher:', id)}
    />
  )
}
