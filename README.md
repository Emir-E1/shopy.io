# Shopy.io - E-commerce Platform

A modern e-commerce platform built with React and Vite, providing a seamless shopping experience with authentication, cart management, and product catalog.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6.4.0-CA4245?style=flat&logo=react-router)

## Features

- Secure authentication system with protected routes
- Cart management with add, remove, and update operations
- Search and filtering functionality
- Responsive design optimized for all devices
- Optimized performance with lazy loading and code splitting
- Modern UI with intuitive user experience

## Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Backend API (port 5000)

### Installation

1. Clone the repository

   ```bash
   git clone <your-repo-url>
   cd shopy
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Start the backend API (in a separate terminal)

   ```bash
   npm run server
   ```

5. Open your browser

   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Application header
│   ├── Footer.jsx      # Footer component
│   ├── ProductList.jsx # Product listing
│   ├── CartList.jsx    # Shopping cart
│   └── ProtectedRoute.jsx # Protected route component
├── contexts/           # Global state management
│   ├── authContext.jsx # Authentication context
│   ├── cartContext.jsx # Cart context
│   └── ProductContex.jsx # Products context
├── pages/              # Application pages
│   ├── Home.jsx        # Home page
│   ├── Shop.jsx        # Shop page
│   ├── Cart.jsx        # Cart page
│   ├── Login.jsx       # Login page
│   └── About.jsx       # About page
└── utils/              # Utilities
    └── useCartStatus.jsx
```

## Technologies Used

- Frontend: React 18, React Router 6
- Build Tool: Vite
- State Management: React Context API
- Styling: CSS Modules (customizable)
- HTTP Client: Fetch API
- Routing: React Router with lazy loading

## Available Scripts

```bash
npm run dev      # Starts development server
npm run build    # Builds for production
npm run preview  # Previews production build
npm run server   # Starts API server (backend)
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
```

### API Endpoints

The application communicates with a REST API on port 5000:

- `GET /products` - Get all products
- `GET /products/:id` - Get specific product

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Your Name**

- GitHub: [@your-github](https://github.com/your-github)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-linkedin)

## Acknowledgments

- [React](https://reactjs.org/) - JavaScript library
- [Vite](https://vitejs.dev/) - Fast build tool
- [React Router](https://reactrouter.com/) - Routing for React
- [Vite React Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) - Starting template

---

If you like this project, please give it a star!
