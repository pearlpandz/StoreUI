import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductListpage from './pages/product';
import UserListPage from './pages/user';
import BlogListpage from './pages/blog';
import Login from './pages/login';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css'

export default function App() {

  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      <Router>
        <Routes>
          <Route index path='' element={<Login />} />
          <Route path='users' element={<ProtectedRoute><UserListPage /></ProtectedRoute>} />
          <Route path='products' element={<ProtectedRoute><ProductListpage /></ProtectedRoute>} />
          <Route path='blogs' element={<ProtectedRoute><BlogListpage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
