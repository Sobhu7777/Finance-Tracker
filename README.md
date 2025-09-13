# WealthWise: A Modern Personal Finance Tracker

## Project Overview
WealthWise is a personal finance management application designed to provide users with a clean, modern, and intuitive interface for tracking their income and expenses. The application's core functionality includes adding, editing, and deleting transactions, filtering transactions by category and title, and visualizing financial data through interactive charts. The frontend is built with a strong focus on a modern fintech-style UI/UX, ensuring a seamless and engaging user experience.

## Technology Stack
* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **Charts:** Recharts (a powerful charting library for React)
* **Routing:** React Router DOM (for handling application navigation)
* **State Management:** React Context API (for managing user authentication state)

## Component Breakdown

### 1. Authentication
* `Login.jsx`: Handles user authentication by managing form state, sending login requests to the API, and updating the global authentication context. Navigates the user to the main dashboard upon successful login.
* `Register.jsx`: Manages new user registration. It captures user details, sends a registration request to the API, and automatically logs the user in upon successful creation of an account.
* `ProtectedRoute.jsx`: A higher-order component that protects specific routes (like the main dashboard). It checks the user's authentication token and redirects to the login page if the user is not authenticated, ensuring security.

### 2. Main Dashboard & Data
* `Home.jsx`: The central hub of the application. This component fetches and manages all transactions, controls the state of the modal, and renders all other dashboard components, including the `SummaryBar`, `FilterControls`, `TransactionList`, and `Charts`.
* `SummaryBar.jsx`: A display component that calculates and shows a quick financial overview of total income, expenses, and net balance. Its design is now robust enough to handle large monetary values without overflowing its containers.
* `TransactionList.jsx`: Renders the list of transactions fetched by the `Home` component. Each transaction item includes clear visual cues for income/expense, and buttons to edit or delete the transaction.
* `FilterControls.jsx`: Provides input fields and a dropdown to allow users to search for transactions by title and filter them by category. This component is now styled to blend seamlessly with the dark theme of the application.
* `Charts.jsx`: This component visualizes financial data using `Recharts`. It displays a pie chart for expense categories and a bar chart to show spending trends over time.

### 3. Modals & Forms
* `Modal.jsx`: A reusable modal component. It provides a semi-transparent overlay to keep the background visible and a central, focused container for dynamic content. It's used for both the `TransactionForm` and the delete confirmation dialog.
* `TransactionForm.jsx`: A multi-purpose form for creating and editing transactions. It is designed to be highly visible within the modal by using a slightly different background color (`bg-gray-700`) from the modal itself, preventing the "blank page" issue.

## UI/UX Design & Enhancements
The application's UI has been upgraded to a modern, fintech-inspired dark theme. Key design choices include:
* **Consistent Color Palette:** A dark background (`bg-gray-900`) is used throughout, with content cards and components set to a slightly lighter shade (`bg-gray-800` or `bg-gray-700`) for visual hierarchy.
* **Vibrant Accent Colors:** Vibrant colors are used to highlight key information, such as green for income, red for expenses, and purple for net balance and interactive elements.
* **Responsive Layout:** The layout adapts smoothly to different screen sizes, from mobile to desktop, ensuring a great user experience on any device.
* **Clean Typography & Spacing:** The font has been carefully chosen for readability, and consistent spacing between elements provides a clean, professional appearance.

## Getting Started

To get the project running, you will need to:
1.  Ensure all the frontend files are in a single directory.
2.  Install all required dependencies (e.g., `react-router-dom`, `recharts`, `tailwindcss`).
3.  Run the application using your preferred development server command (e.g., `npm start` or `yarn dev`).
4.  The application will be accessible at `http://localhost:3000` (or the port specified by your development server).
