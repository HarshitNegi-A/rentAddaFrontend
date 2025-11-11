import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AddItem from "./components/AddItem"
import ItemDetails from "./components/ItemDetails"
import MyBookings from "./components/MyBookings"
import EditItem from "./components/EditItem"
import MyItems from "./components/MyItems"
import Orders from "./components/Orders"
import ChatRoom from "./components/ChatRoom"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
      <Route path="/add-item" element={<ProtectedRoute><AddItem/></ProtectedRoute>} />
      <Route path="/items/:id" element={<ItemDetails />} />
      <Route path="/my-bookings" element={<ProtectedRoute><MyBookings /></ProtectedRoute>} />
      <Route path="/edit-item/:id" element={<ProtectedRoute><EditItem /></ProtectedRoute>} />
      <Route path="/my-items" element={<ProtectedRoute><MyItems /></ProtectedRoute>} />
      <Route path="/chat/:bookingId" element={<ProtectedRoute><ChatRoom /></ProtectedRoute>} />


    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
