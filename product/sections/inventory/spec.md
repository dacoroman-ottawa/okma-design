# Inventory Specification

## Overview
Manage the product catalog including instruments, books, accessories, musical scores, and gift cards. Track stock levels, active rentals with terms and due dates, and sales history. Manage suppliers and customers. Alerts highlight products below re-order levels.

## User Flows
- View product catalog with filters by type, supplier, and stock status (including "Low Stock" filter)
- Add/edit/delete products with type, name, model, serial number, supplier, pricing, and stock levels
- View supplier list with contact details and associated products
- Add/edit/delete suppliers with name, contact person, email, phone, and address
- View customer list with contact details and rental/purchase history
- Add/edit/delete customers with name, email, phone, and address
- Create a rental: select product → select customer → set rental period (weekly/monthly), due date, deposit, and fees
- Return a rental: mark as returned, note condition, calculate any late fees
- Record a sale: select product → select customer → process payment (links to Payments)
- View active rentals with due dates and overdue alerts
- View sales history with filters by date and product

## UI Requirements
- Five-tab layout: Products, Rentals, Sales, Suppliers, Customers
- Product list with inline low-stock warning badges (amber for approaching, red for below re-order level)
- "Low Stock" quick filter in Products tab
- Rental list showing customer, product, due date, and status (active/overdue/returned)
- Sales history table with date, customer, product, and amount
- Supplier list with name, contact info, and product count
- Customer list with name, contact info, and active rentals count
- Product form with type dropdown, supplier dropdown, pricing fields (cost, selling price, rental price), and re-order threshold
- Supplier form with contact fields
- Customer form with contact fields

## Configuration
- shell: true
