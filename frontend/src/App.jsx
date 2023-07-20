import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTechnology from "./pages/admin/AdminTechnology";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminContact from "./pages/admin/AdminContact";

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/admin/technology" element={<AdminTechnology />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/contact" element={<AdminContact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
