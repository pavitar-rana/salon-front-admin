import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Home</div>

                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("/add-staff");
                            }}
                        >
                            Add Staff
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("/add-services");
                            }}
                        >
                            Add Services
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("/delete-staff");
                            }}
                        >
                            Delete Staff
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("/delete-service");
                            }}
                        >
                            Delete Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
