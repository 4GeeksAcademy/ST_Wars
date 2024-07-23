import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const More = () => {
    const { actions } = useContext(Context);
    const { type, theid } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await actions.getInformation(type, theid);
                setItem(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchItem();
    }, [type, theid, actions]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-white">{item.name}</h1>
                        <p className="text-white">
                            {item.description || "No description available."}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <hr className="separator-red" />
                <div className="row text-center text-danger">
                    {type === "starships" && (
                        <>
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{item.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Model</h2>
                                <p className="fs-5">{item.model}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">cost_in_credits</h2>
                                <p className="fs-5">{item.cost_in_credits}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Length</h2>
                                <p className="fs-5">{item.length}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Cargo capacity </h2>
                                <p className="fs-5">{item.cargo_capacity}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Crew</h2>
                                <p className="fs-5">{item.crew}</p>
                            </div>
                        </>
                    )}

                    {type === "vehicles" && (
                        <>
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{item.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Vehicle class</h2>
                                <p className="fs-5">{item.vehicle_class}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Manufacturer</h2>
                                <p className="fs-5">{item.manufacturer}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Cost in credits</h2>
                                <p className="fs-5">{item.cost_in_credits}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Length</h2>
                                <p className="fs-5">{item.length}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Cargo capacity </h2>
                                <p className="fs-5">{item.cargo_capacity}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Max atmosphering speed </h2>
                                <p className="fs-5">{item.max_atmosphering_speed}</p>
                            </div>
                        </>
                    )}

                    {type === "species" && (
                        <>
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{item.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Classification</h2>
                                <p className="fs-5">{item.classification}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Designation</h2>
                                <p className="fs-5">{item.designation}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Average height</h2>
                                <p className="fs-5">{item.average_height}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Hair colors</h2>
                                <p className="fs-5">{item.hair_colors}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Skin colors</h2>
                                <p className="fs-5">{item.skin_colors}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Eye colors</h2>
                                <p className="fs-5">{item.eye_colors}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Language</h2>
                                <p className="fs-5">{item.language}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

More.propTypes = {
    name: PropTypes.string,
    model: PropTypes.string,
    cost_in_credits: PropTypes.string,
    length: PropTypes.string,
    cargo_capacity: PropTypes.string,
    crew: PropTypes.string,
    vehicle_class: PropTypes.string,
    manufacturer: PropTypes.string,
    max_atmosphering_speed: PropTypes.string,
    classification: PropTypes.string,
    designation: PropTypes.string,
    average_height: PropTypes.string,
    hair_colors: PropTypes.string,
    skin_colors: PropTypes.string,
    eye_colors: PropTypes.string,
    language: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
};

export default More;