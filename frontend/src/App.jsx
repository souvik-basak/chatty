import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import LogInPage from "./pages/LogInPage"
import ProfilePage from "./pages/ProfilePage"
import SettingsPage from "./pages/SettingsPage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import { Toaster } from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore"



const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const {theme} = useThemeStore();
  console.log(onlineUsers);
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  // console.log({ authUser });

  if(isCheckingAuth && !authUser){
    return(
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
  return (
    <div data-theme={theme}>
      <Navbar/>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to = "/login"/>} />
        <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to ="/"/>} />
        <Route path="/login" element={!authUser ? <LogInPage/> : <Navigate to ="/"/>} />
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to ="/login"/>} />
        <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App