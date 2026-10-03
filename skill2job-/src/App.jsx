import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Roles from "./pages/roles/Roles";
import Skills from "./pages/skills/Skills";
import Roadmap from "./pages/roadmap/Roadmap";
import Projects from "./pages/projects/Projects";
import Interview from "./pages/interview/Interview";
import Applications from "./pages/applications/Applications";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* User Routes */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



