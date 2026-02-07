# People Specification

## Overview
Manage teacher and student profiles with contact information, availability schedules, and enrollment details. Teachers and students are accessed via separate sub-pages, each displaying a filterable card grid with drill-down to full profile views.

## User Flows
- View teachers/students as a card grid with name and key info
- Search and filter by name, instrument, active status, and other criteria
- Click a card to open the detail page with full profile
- Add a new teacher or student via modal form
- Edit existing person via modal form
- Set weekly availability using a time slot grid
- View current enrollments (students see their teacher/instrument pairings; teachers see their assigned students)

## UI Requirements
- Separate sub-pages for Teachers and Students under People nav item
- Card grid layout showing name, instrument(s), and active status
- Advanced filter bar with search input and dropdown filters
- Detail page with profile section, availability grid, and enrollments list
- Modal forms for add/edit with field validation
- Weekly availability grid (days × time slots)
- Teacher cards show specialization and instruments taught
- Student cards show skill levels by instrument

## Configuration
- shell: true
