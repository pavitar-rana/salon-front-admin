import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllServices() {
    const navigator = useNavigate();
    const [allServices, setAllServices] = useState([]);
    const [serviceId, setServiceId] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3000/admin/services");

            setAllServices(res.data.services);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleDelete = async (service) => {
        const res = await axios.post(
            "http://localhost:3000/admin/delete-service",
            {
                id: service._id,
            }
        );

        console.log(res.data);

        if (res.status === 200) {
            alert("Staff deleted successfully");
            window.location.reload();
        }
    };

    return (
        <>
            <div className="flex items-center justify-center flex-col h-[100vh]">
                <div className="w-[70vw] flex flex-col items-center justify-center gap-10">
                    <div>All Services</div>
                    <div>
                        <div>Upcoming</div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allServices.map((service) => (
                                        <tr key={service._id}>
                                            <td>{service._id}</td>
                                            <td>{service.name}</td>
                                            <td>{service.price}</td>
                                            <td>{service.description}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => {
                                                        navigator(
                                                            "/edit-service",
                                                            {
                                                                state: {
                                                                    service,
                                                                },
                                                            }
                                                        );
                                                    }}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => {
                                                        handleDelete(service);
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllServices;
