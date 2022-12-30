import { Toaster } from "react-hot-toast"
import "./App.css"
import AddContact from "./components/AddContact"
import ManageSheets from "./components/ManageSheets"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SendMail from "./components/SendMail"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import SheetHandler from "./components/SheetHandler"
import Authorisor from "./components/Authorisor"
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<AddContact />} path="Add" />
          <Route element={<ManageSheets />} path="sheet" />
          <Route element={<SendMail />} path="mail" />
          <Route element={<Dashboard />} path="ds" />
          <Route element={<SheetHandler />} path="handler" />
          <Route element={<Register />} path="register" />
          <Route element={<Login />} path="login" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
