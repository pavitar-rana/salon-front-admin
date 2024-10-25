import axios from "axios";
import React, { useState } from "react";

function AddServices() {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = async () => {
        const res = await axios.post("http://localhost:3000/admin/services", {
            name,
            duration,
            price,
            description,
        });

        console.log(res.data);

        if (res.status === 200) {
            alert("Services added successfully");
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Add Services </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input
                                type="text"
                                className="grow"
                                placeholder="Haricut"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Duration
                            <input
                                type="text"
                                className="grow"
                                placeholder="Hours : 1,2,3"
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Price
                            <input
                                type="text"
                                className="grow"
                                placeholder="100"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Description
                            <input
                                type="text"
                                className="grow"
                                placeholder="Description of services"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={handleClick}
                        >
                            Add sevices
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddServices;
