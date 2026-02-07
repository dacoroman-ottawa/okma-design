# User Administration Specification

## Overview
Manage application users who can log in to the system. Admins can create, edit, and delete users, control active status, and send password reset links. Passwords are self-managed by users.

## User Flows
- View all app users in a card grid with name, email, admin badge, and status
- Add a new user with name, email, and admin flag (password set via email invitation)
- Edit user details (name, email, admin flag)
- Toggle user active/inactive status
- Send password reset link to a user
- Delete a user

## UI Requirements
- Card grid layout showing user cards with initials avatar, name, email, admin badge, and active status
- Filter/search by name or email
- User form with name, email (validated), and admin checkbox
- Active/inactive toggle on user cards
- "Send Reset Link" button for password management
- Confirmation dialog for delete actions

## Configuration
- shell: true
