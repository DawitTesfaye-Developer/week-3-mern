# MERN Frontend App

A modern React application built with TypeScript, Vite, and Tailwind CSS. This project demonstrates a responsive single-page application with task management, API data fetching, and theme switching capabilities.

## Features

- **Task Management**: Add, complete, delete, and filter tasks with local storage persistence
- **API Integration**: Fetch and display data from JSONPlaceholder with search and pagination
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Theme Switching**: Dark and light mode support with context-based state management
- **Component Library**: Reusable UI components (Button, Card, Navbar, Footer)
- **TypeScript**: Full type safety throughout the application
- **Routing**: Client-side routing with React Router DOM

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Hooks**: Custom hooks for local storage and theme management
- **Linting**: ESLint with TypeScript support

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-frontend.git
   cd mern-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Navigation
- **Home (/)**: User profile page
- **Tasks (/tasks)**: Task management interface
- **API (/api)**: Data fetching from external API

### Task Manager
- Add new tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks by status
- Data persists in local storage

### API Data Page
- Fetch posts from JSONPlaceholder
- Search through posts
- Pagination support

### Theme Switching
- Toggle between light and dark themes using the navbar switch

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── profile.tsx
│   └── css/             # Component-specific styles
├── contexts/            # React contexts
│   └── ThemeContext.tsx
├── hooks/               # Custom hooks
│   └── useLocalStorage.ts
├── pages/               # Page components
│   ├── ApiData.tsx
│   └── TaskManager.tsx
├── utils/               # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
