import classesData from '@/../product/sections/classes/data.json'
import peopleData from '@/../product/sections/people/data.json'
import { ClassesView } from './components/ClassesView'

export default function ClassesViewPreview() {
  return (
    <ClassesView
      classes={classesData.classes}
      teachers={peopleData.teachers}
      students={peopleData.students}
      instruments={peopleData.instruments}
      attendanceRecords={classesData.attendanceRecords}
      teacherAvailability={peopleData.teacherAvailability}
      studentAvailability={peopleData.studentAvailability}
      onViewClass={(id) => console.log('View class:', id)}
      onCreateClass={() => console.log('Create new class')}
      onEditClass={(id) => console.log('Edit class:', id)}
      onRescheduleClass={(id) => console.log('Reschedule class:', id)}
      onCancelClass={(id) => console.log('Cancel class:', id)}
      onMarkAttendance={(classId, studentId, date, attended) =>
        console.log('Mark attendance:', { classId, studentId, date, attended })
      }
    />
  )
}
