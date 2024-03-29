import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn } from "./pages/auth";
import { DetailRole } from "./pages/details/DetailRole";

function App() {
  if(!localStorage.getItem("token")){
    return <SignIn/>
  }
  return (
    <Routes>
      <Route path="/detailrole" element={<DetailRole />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
