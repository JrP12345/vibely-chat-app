import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth, AuthProvider } from "./context/AuthContext.js";
import { ScaleLoader } from "react-spinners";

function AppContent() {
  const { isAuthenticate, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader color="#36D7B7" />
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/auth"
        element={isAuthenticate ? <Navigate to={"/"} /> : <Auth />}
      />
      <Route
        path="/"
        element={isAuthenticate ? <Home /> : <Navigate to={"/auth"} />}
      />
    </Routes>
  );
}
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
