# Payments Specification

## Overview
Manage credit purchases, balance tracking, and lesson payment deductions. Admins can view transaction history and student credit balances, record new credit purchases with discounts and taxes, and process inventory payments for rentals and sales.

## User Flows
- View all transactions in a filterable list (by type, date, student)
- View student credit balances summary with drill-down to individual history
- Record a credit purchase: select student → see their enrollments → enter quantity, discount, and tax → confirm payment
- Credits are automatically deducted when attendance is marked in Classes
- Add manual credit adjustments (add/remove credits with a note)
- Record an inventory payment: select customer → add items → apply discounts and tax → select payment method → confirm

## UI Requirements
- Transaction list view with filters for type (credits, inventory, adjustment), date range, and student
- Student balances view showing each student's current credit balance per enrollment
- Credit purchase form with enrollment selection, quantity input, discount field, and tax dropdown (HST 13%, GST 5%, No tax)
- Price per credit based on teacher hourly rate and instrument
- Transaction rows show date, type, student, amount, and balance change
- Inventory payment form with line items, subtotal, discount, tax, and payment method
- Credit adjustment form with amount (+/-) and reason note

## Configuration
- shell: true
