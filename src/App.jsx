import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AddStaff from "./AddStaff";
import AddServices from "./AddServices";
import DeleteStaff from "./DeleteStaff";

import AllServices from "./AllServices";
import EditService from "./EditService";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/delete-staff" element={<DeleteStaff />} />
                <Route path="/add-staff" element={<AddStaff />} />
                <Route path="/add-services" element={<AddServices />} />
                <Route path="/all-services" element={<AllServices />} />
                <Route path="/edit-service" element={<EditService />} />
            </Routes>
        </>
    );
}

export default App;
