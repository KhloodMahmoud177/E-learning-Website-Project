import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarNew } from "./components/Navbar";
<<<<<<< HEAD
=======
// import Button from 'react-bootstrap/Button';
>>>>>>> e01a430b9d2e4d2377f7661ad9c8c400f790ca01
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "remixicon/fonts/remixicon.css";
import SignUp from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthProvider from "./statestore/Authcontext";
<<<<<<< HEAD
import Cart from "./pages/cart/Cart";
import { CartProvider } from "./statestore/CartContext"; // Import CartProvider

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AuthProvider>
          <Router>
            <NavbarNew />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </AuthProvider>
      </CartProvider>
=======
import CoursesPage from "./pages/coursespage/CoursesPage";
import CourseDetailPage from "./pages/coursedetailpage/CourseDetailPage";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavbarNew />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
          </Routes>
        </Router>
      </AuthProvider>
>>>>>>> e01a430b9d2e4d2377f7661ad9c8c400f790ca01
    </div>
  );
}

export default App;
