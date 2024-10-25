import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AddStaff from "./AddStaff";
import AddServices from "./AddServices";
import DeleteStaff from "./DeleteStaff";
import DeleteService from "./DeleteService";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/delete-staff" element={<DeleteStaff />} />
                <Route path="/add-staff" element={<AddStaff />} />
                <Route path="/add-services" element={<AddServices />} />
                <Route path="/delete-service" element={<DeleteService />} />
            </Routes>
        </>
    );
}

export default App;
