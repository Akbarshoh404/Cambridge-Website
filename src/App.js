import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Course from "./Pages/Kurslar/Course";
import Team from "./Pages/Team/Team";
import Admin_Login from "./Pages/Admin/Admin_login";
import Admin from "./Pages/Admin/Admin";
import AdminTeacher from "./Layoutes/Admin_Teacher/Teacher";
import AdminApp from "./Layoutes/Admin_Application/App";
import Aplication from "./Pages/Apply/Apply";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/team" element={<Team />} />
        <Route path="/admin" element={<Admin_Login />} />
        <Route path="/yebanutiygandon" element={<Admin />} />
        <Route path="/admin-teacher" element={<AdminTeacher />} />
        <Route path="/admin-application" element={<AdminApp />} />
        <Route path="course/:category" element={<Aplication/>}/>
      </Routes>
    </>
  );
}

export default App;
