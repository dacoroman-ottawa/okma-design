# Classes Specification

## Overview
Schedule and manage recurring music lessons for private and group classes. Admins can view classes in a calendar or list format, create enrollments that match teacher and student availability, and track attendance for each session.

## User Flows
- View all scheduled classes in a weekly calendar or list view
- Toggle between calendar and list views
- Filter classes by teacher, student, day of week, or instrument
- Create a new class: select student and instrument → see matching teachers (based on availability and instrument) → choose time slot (weekday, time, duration) → set frequency (once or twice per week)
- Add multiple students to a group class during creation
- Edit class details (teacher, time, students, duration)
- Reschedule a class to a different time slot
- Cancel a class session
- Mark attendance for each student in a class

## UI Requirements
- Weekly calendar view with time slots showing scheduled classes
- List view with sortable/filterable table of classes
- Filter bar with teacher, student, day, and instrument dropdowns
- Availability highlighting: show conflicts when classes overlap with unavailable times
- Class cards/rows show teacher, student(s), instrument, time, duration, and type (private/group)
- Duration options: 30, 45, or 60 minutes
- Frequency options: once or twice per week
- Modal or side panel for creating/editing classes
- Attendance checkboxes for each student in a class

## Configuration
- shell: true
