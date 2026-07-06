# Synexus Admin Dashboard

A responsive admin dashboard built with React.js as part of the Frontend Development Internship at Synexus Software Technologies.

## Features (Week 1)

- Responsive layout with a persistent, collapsible sidebar and top header
- Client-side routing across 4 pages: Overview, Inventory, Settings, Reports
- Sidebar automatically collapses on mobile/tablet screens, with a hamburger menu toggle
- Layout tested and confirmed working across desktop, tablet, and mobile breakpoints

## Features (Week 2)

- Complex "Add Employee" form with multiple input types: text, dropdown, radio buttons, date picker, and file upload
- Client-side validation for required fields, email format, and minimum length
- Friendly, field-specific error messages that clear once corrected
- Form prevents submission until all validation passes

## Tech Stack

- React.js
- React Router (react-router-dom)
- Vite
- CSS (Flexbox, media queries)

## Getting Started

### Prerequisites
- Node.js installed ([download here](https://nodejs.org))

### Installation

1. Clone the repository
git clone https://github.com/UroojSheikh/synexus-admin-dashboard.git

2. Navigate into the project folder
cd synexus-admin-dashboard

3. Install dependencies
npm install

4. Start the development server
npm run dev

5. Open your browser to `http://localhost:5173`

## Project Structure
src/
├── pages/
│   ├── Overview.jsx
│   ├── Inventory.jsx
│   ├── Settings.jsx
│   ├── Reports.jsx
│   └── AddEmployee.jsx
├── App.jsx        # main layout + routing
├── App.css         # layout and responsive styling

## Component Notes

**App.jsx**
The main layout and routing controller for the app. Manages the sidebar's open/closed state using `useState`, and wraps the entire app in `BrowserRouter`. Renders the persistent sidebar and top header, while page content is swapped dynamically via React Router based on the current URL. Also handles closing the sidebar automatically on navigation, for mobile usability.

**App.css**
Handles all layout and responsive styling. Uses Flexbox to split the layout into a fixed-width sidebar and a flexible content area (`flex: 1`). Media queries (`max-width: 768px`) control the collapsible sidebar behavior on smaller screens, using `position: fixed` and a sliding `transition` for smooth open/close animation.

**pages/Overview.jsx, Settings.jsx, Reports.jsx**
Placeholder page components representing dashboard sections, rendered inside the routed content area. Currently static content; will be built out with real functionality in Weeks 3-4.

**pages/Inventory.jsx**
Will be converted into a live data table in Week 3, fetching and displaying records via API integration.

**pages/AddEmployee.jsx**
A complex form for adding a new employee, demonstrating controlled inputs across every major HTML input type (text, select, radio, date, file). Uses a single `errors` state object to track field-level validation, checked via a `validate()` function before allowing submission. `e.preventDefault()` stops native form submission so React fully controls the flow.

**Counter.jsx / ToggleText.jsx**
Early learning components built while practicing React state management (`useState`). Not currently used in the main app, but demonstrate core patterns (numeric state, boolean toggling, conditional rendering) reused in later work.

**Greeting.jsx**
An early practice component demonstrating props and destructuring. Not part of the current dashboard UI.

## Validation Scenarios (Week 2)

The Add Employee form validates the following cases:

| Field | Validation Rule | Error Message |
|---|---|---|
| Full Name | Minimum 2 characters | "Name must be at least 2 characters." |
| Email | Must contain "@" and "." | "Please enter a valid email address." |
| Department | Must be selected | "Please select a department." |
| Employment Type | Must be selected | "Please select an employment type." |
| Start Date | Must be selected | "Please select a start date." |

Profile Photo is optional and has no validation. All other fields are required; the form will not submit until every validation rule passes.

## Screenshots

![Desktop Inventory View](./src/screenshots/desktop-Inventory.png)
![Desktop Settings View](./src/screenshots/desktop-Settings.png)
![Mobile Sidebar Closed](./src/screenshots/mobile-closed.png)
![Mobile Sidebar Open](./src/screenshots/mobile-open.png)
![Form Validation Errors](./src/screenshots/form-validation-errors.png)
![Form Submitted Successfully](./src/screenshots/form-success.png)

## Known Limitations / Next Steps

- Overview, Settings, and Reports pages currently show placeholder text; real content will be built in Weeks 3-4
- Sidebar navigation currently uses plain `<Link>` — active route highlighting will be added in a future iteration
- Add Employee form currently logs submissions to the console; will connect to a real/mock API in Week 3

## Author

Urooj Sheikh — [LinkedIn](https://www.linkedin.com/in/urooj-sheikh/)