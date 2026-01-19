import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import UsersDetail from "./pages/UsersDetail";
import AddUser from "./pages/AddUser";
import Users from "./pages/Users";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersCharts from "./pages/UsersCharts";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users/:id" element={<UsersDetail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/charts" element={<UsersCharts />} />
      </Routes>
    </div>
  );
}

export default App;
