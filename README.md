# RentAdda Frontend – Old Items Rental Marketplace (React)

## 🚀 Overview
This is the **React + Vite frontend** for **RentAdda**, a platform where users can rent **old/used items** such as:
- Cameras
- Laptops
- Furniture
- Tools
- Bicycles
- Appliances
- And many more everyday items

Users can **list items for rent**, **book items**, **chat with owners**, and **manage their rentals**.

## 🧰 Tech Stack
- React.js (Vite)
- React Router
- Context API (Auth)
- Axios (API calls)
- Tailwind CSS (UI)

## ✅ Features
- User Authentication (JWT)
- Browse items for rent
- Search + Filters (category, price range, availability)
- Item details page
- Add / Edit / Delete rental items
- Upload item images
- Booking system (request → accept/reject)
- Chat between renter & owner
- Owner Dashboard
- Renter Dashboard
- Responsive UI
- Protected Routes

## 📦 Installation

```bash
cd frontend
npm install
```

## ▶️ Run Development Server

```bash
npm run dev
```

Runs at:
```
http://localhost:5173/
```

## ⚙️ API Configuration
Inside axios or config:

```js
const API = "http://localhost:3000";
```

## 📁 Folder Structure

```
frontend/
  ├── src/
  │   ├── components/
  │   ├── context/
  │   └── App.jsx
  ├── public/
  └── package.json
```

## 🔐 Protected Route Example

```jsx
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Protected = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (!token) return <Navigate to="/signup" replace />;
  return children;
};
```

## ✅ Build for Production
```bash
npm run build
```

---



