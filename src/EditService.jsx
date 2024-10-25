import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditService() {
    const location = useLocation();
    const navigate = useNavigate();
    const service = location.state?.service || {};

    const [newService, setNewService] = useState({
        name: service.name || "",
        duration: service.duration || "",
        price: service.price || "",
        description: service.description || "",
    });

    const handleClick = async () => {
        try {
            const res = await axios.post(
                "http://localhost:3000/admin/service/update",
                {
                    id: service._id,
                    name: newService.name,
                    service: newService.name,
                    price: newService.price,
                    duration: newService.duration,
                    description: newService.description,
                }
            );

            console.log(res.data);

            if (res.status === 200) {
                alert("Service updated successfully");
                navigate("/all-services");
            }
        } catch (error) {
            console.error("Error updating service:", error);
            alert("Failed to update the service. Please try again.");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Edit Service</div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input
                                type="text"
                                value={newService.name}
                                onChange={(e) =>
                                    setNewService((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Duration
                            <input
                                type="text"
                                value={newService.duration}
                                onChange={(e) =>
                                    setNewService((prev) => ({
                                        ...prev,
                                        duration: e.target.value,
                                    }))
                                }
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Price
                            <input
                                type="text"
                                value={newService.price}
                                onChange={(e) =>
                                    setNewService((prev) => ({
                                        ...prev,
                                        price: e.target.value,
                                    }))
                                }
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Description
                            <input
                                type="text"
                                value={newService.description}
                                onChange={(e) =>
                                    setNewService((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }))
                                }
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={handleClick}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditService;
