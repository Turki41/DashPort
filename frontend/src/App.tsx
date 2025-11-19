import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import PublicRoute from "./routes/PublicRoute";
import { useEffect } from "react";
import { checkAuth } from "./features/auth/authSlice";
import AdminOnly from "./routes/AdminOnly";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/user/Dashboard";

export default function App() {
  const { user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const check = async () => {
      try {
        await dispatch(checkAuth()).unwrap()
      } catch (error) {
        console.log("Auth check failed:")
      }
    }

    check()
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path="/signup" element={
          <AdminOnly>
            <Signup />
          </AdminOnly>
        } />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />


        <Route path="/" element={<div><button onClick={() => console.log(user)}>user</button></div>} />

        {/* Fallback routes forward */}
        <Route path="*" element={<Navigate to={'/'} replace />} />

      </Routes>
    </BrowserRouter>
  )
}