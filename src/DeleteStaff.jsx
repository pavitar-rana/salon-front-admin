import axios from "axios";
import React, { useEffect, useState } from "react";

function DeleteStaff() {
    const [allStaffs, setAllStaffs] = useState([]);
    const [staffId, setStaffId] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3000/admin/staffs");

            setAllStaffs(res.data.staffs);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleClick = async () => {
        const res = await axios.post(
            "http://localhost:3000/admin/delete-staff",
            {
                id: staffId,
            }
        );

        console.log(res.data);

        if (res.status === 200) {
            alert("Staff deleted successfully");
            window.location.reload();
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Delete Staff</div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Staff name
                            <select
                                className="grow"
                                onChange={(e) => {
                                    setStaffId(e.target.value);
                                }}
                            >
                                <option value="">Select Staff</option>
                                {!loading &&
                                    allStaffs?.map((staff) => (
                                        <option
                                            key={staff._id}
                                            value={staff._id}
                                        >
                                            {staff.name}
                                        </option>
                                    ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-error" onClick={handleClick}>
                            Delete staff
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteStaff;
