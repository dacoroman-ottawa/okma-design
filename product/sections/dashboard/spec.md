# Dashboard Specification

## Overview
At-a-glance weekly overview for administrators showing today's and upcoming classes, student credit alerts, and inventory alerts. Activity-focused metrics at the top with today highlighted in the weekly view.

## User Flows
- View key activity metrics (classes today, students enrolled, active rentals, low stock count)
- See today's class schedule with times and teacher names
- See upcoming classes for the rest of the week
- View students with low or zero credit balances
- View inventory alerts (low stock products and overdue rentals)

## UI Requirements
- Metrics cards row at the top showing activity counts
- Today's Classes section with time-ordered list
- Upcoming Classes section showing next 5-7 classes
- Low Credit Alerts section highlighting students needing attention
- Inventory Alerts section showing low stock and overdue rentals
- Read-only dashboard (no action buttons, navigation to other sections for actions)
- Weekly scope with today highlighted

## Configuration
- shell: true
