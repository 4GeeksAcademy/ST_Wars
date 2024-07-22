import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {props.starship_class && (
                    <p className="card-text">
                        Model: {props.model} <br />
                        Starship_class: {props.starship_class} <br />
                        Passengers: {props.passengers} <br />
                    </p>
                )}
                {props.cost_in_credits && (
                    <p className="card-text">
                        Model: {props.model} <br />
                        Population: {props.cost_in_credits} <br />
                        Passengers: {props.passengers} <br />
                    </p>
                )}
                {props.classification && (
                    <p className="card-text">
                        Name: {props.name} <br />
                        Classification: {props.classification} <br />
                        Language: {props.language} <br />
                    </p>
                )}
                <Link
                    to={`/single/${props.type}/${props.id}`}
                    className="btn btn-outline-danger mb-4 me-5"
                >
                    Learn more!
                </Link>
                <button
                    type="button"
                    className="btn btn-outline-danger mb-4 ms-5"
                >
                    <FontAwesomeIcon icon={faJedi} />
                </button>
            </div>
        </div>
);
}
    Card.propTypes = {
        name: PropTypes.string,
        model: PropTypes.string,
        starship_class: PropTypes.string,
        passengers: PropTypes.string,
        population: PropTypes.string,
        classification: PropTypes.string,
        language: PropTypes.string,
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    };
    
    export default Card;
