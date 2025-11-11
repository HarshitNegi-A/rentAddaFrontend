import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ✅ Logo + Tagline */}
        <Link to="/" className="group">
          <h1 className="text-2xl font-extrabold text-blue-700 tracking-wide">
            RentAdda
          </h1>
          <p className="text-xs text-gray-600 group-hover:text-blue-600 transition">
            Why buy? Just RentAdda!
          </p>
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          <Link to="/" className="hover:text-blue-600 transition">Home</Link>

          {!token && (
            <Link to="/signup" className="hover:text-blue-600 transition">
              Signup
            </Link>
          )}

          {token && (
            <>
              <Link to="/add-item" className="hover:text-blue-600 transition">
                Add Item
              </Link>

              <Link to="/my-bookings" className="hover:text-blue-600 transition">
                My Bookings
              </Link>

              <Link to="/my-items" className="hover:text-blue-600 transition">
                My Items
              </Link>

              <Link to="/orders" className="hover:text-blue-600 transition">
                Orders
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">

          <Link
            to="/"
            className="block hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          {!token && (
            <Link
              to="/signup"
              className="block hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Signup
            </Link>
          )}

          {token && (
            <>
              <Link
                to="/add-item"
                className="block hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                Add Item
              </Link>

              <Link
                to="/my-bookings"
                className="block hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                My Bookings
              </Link>

              <Link
                to="/my-items"
                className="block hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                My Items
              </Link>

              <Link
                to="/orders"
                className="block hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                Orders
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
