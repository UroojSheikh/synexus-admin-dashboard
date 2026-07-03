# Synexus Admin Dashboard

A responsive admin dashboard built with React.js as part of the Frontend Development Internship at Synexus Software Technologies.

## Features (Week 1)

- Responsive layout with a persistent, collapsible sidebar and top header
- Client-side routing across 4 pages: Overview, Inventory, Settings, Reports
- Sidebar automatically collapses on mobile/tablet screens, with a hamburger menu toggle
- Layout tested and confirmed working across desktop, tablet, and mobile breakpoints

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
│   └── Reports.jsx
├── App.jsx        # main layout + routing
├── App.css         # layout and responsive styling

## Component Notes

**App.jsx**
The main layout and routing controller for the app. Manages the sidebar's open/closed state using `useState`, and wraps the entire app in `BrowserRouter`. Renders the persistent sidebar and top header, while page content is swapped dynamically via React Router based on the current URL. Also handles closing the sidebar automatically on navigation, for mobile usability.

**App.css**
Handles all layout and responsive styling. Uses Flexbox to split the layout into a fixed-width sidebar and a flexible content area (`flex: 1`). Media queries (`max-width: 768px`) control the collapsible sidebar behavior on smaller screens, using `position: fixed` and a sliding `transition` for smooth open/close animation.

**pages/Overview.jsx, Inventory.jsx, Settings.jsx, Reports.jsx**
Placeholder page components representing each dashboard section, rendered inside the routed content area. Currently static content; will be built out with real functionality (forms, data tables, etc.) in Weeks 2-4.

**Counter.jsx / ToggleText.jsx**
Early learning components built while practicing React state management (`useState`). Not currently used in the main app, but demonstrate core patterns (numeric state, boolean toggling, conditional rendering) that will be reused and extended in upcoming reusable component work (Week 4).

**Greeting.jsx**
An early practice component demonstrating props and destructuring. Not part of the current dashboard UI.

## Screenshots

![Desktop Inventory View](./src/screenshots/desktop-Inventory.png)
![Desktop Settings View](./src/screenshots/desktop-Settings.png)
![Mobile Sidebar Closed](./src/screenshots/mobile-closed.png)
![Mobile Sidebar Open](./src/screenshots/mobile-open.png)
## Known Limitations / Next Steps

- Page content is currently placeholder text; real content (forms, tables, etc.) will be built in Weeks 2-4
- Sidebar navigation currently uses plain `<Link>` — active route highlighting will be added in a future iteration

## Author

Urooj Sheikh — [LinkedIn](https://www.linkedin.com/in/urooj-sheikh/)