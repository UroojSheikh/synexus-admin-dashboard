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

## Screenshots

![Desktop Inventory View](./screenshots/desktop-Inventory.png)
![Desktop Settings View](./screenshots/desktop-Settings.png)
![Mobile Sidebar Closed](./screenshots/mobile-closed.png)
![Mobile Sidebar Open](./screenshots/mobile-open.png)

## Known Limitations / Next Steps

- Page content is currently placeholder text; real content (forms, tables, etc.) will be built in Weeks 2-4
- Sidebar navigation currently uses plain `<Link>` — active route highlighting will be added in a future iteration

## Author

Urooj Sheikh — [LinkedIn](https://www.linkedin.com/in/urooj-sheikh/)