import axios from "axios";
import React, { useState } from "react";

function AddStaff() {
    //     const { name, email, services } = req.body;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = async () => {
        const res = await axios.post("http://localhost:3000/admin/staff", {
            name,
            email,
        });

        console.log(res.data);

        if (res.status === 200) {
            alert("Staff added successfully");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Add Staff</div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input
                                type="text"
                                className="grow"
                                placeholder="John Doe"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input
                                type="text"
                                className="grow"
                                placeholder="a@a.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={handleClick}
                        >
                            Add staff
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddStaff;
