import data from '@/../product/sections/people/data.json'
import { TeacherDetail } from './components/TeacherDetail'

export default function TeacherDetailPreview() {
  // Preview with the first teacher (Margaret Chen)
  const teacher = data.teachers[0]

  return (
    <TeacherDetail
      teacher={teacher}
      instruments={data.instruments}
      availability={data.teacherAvailability[teacher.id] || []}
      enrollments={data.enrollments}
      students={data.students}
      onBack={() => console.log('Navigate back to teachers list')}
      onEdit={() => console.log('Edit teacher:', teacher.id)}
      onDelete={() => console.log('Delete teacher:', teacher.id)}
      onUpdateAvailability={(slots) =>
        console.log('Update availability:', teacher.id, slots)
      }
      onViewStudent={(id) => console.log('View student:', id)}
    />
  )
}
