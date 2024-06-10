import React, { useState } from "react";

//create your first component
const TrafficLight = () => {

    const [color, setColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    const togglePurpleDiv = () => {
        setColors((prevColors) => {
        if (prevColors.includes("purple")) {
            return prevColors.filter((c) => c !== "purple");
        } else {
            return [...prevColors, "purple"];
        }
        });
    };

    return (
        <div className="container-fluid">
            <div className="trafficTop"></div>
            <div className="container">
                {colors.includes("red") && (
                    <div
                    className={`red-light ${color === "red" ? "selected" : ""}`}
                    onClick={() => setColor("red")}
                    ></div>
                )}
                {colors.includes("yellow") && (
                    <div
                    className={`yellow-light ${color === "yellow" ? "selected" : ""}`}
                    onClick={() => setColor("yellow")}
                    ></div>

                )}
                {colors.includes("green") && (
                    <div
                    className={`green-light ${color === "green" ? "selected" : ""}`}
                    onClick={() => setColor("green")}
                    ></div>

                )}
                {colors.includes("purple") && (
                    <div
                        className={`purple-light ${color === "purple" ? "selected" : ""}`}
                        onClick={() => setColor("purple")}
                    ></div>
                )}
            </div>
            <button className="bn632-hover bn20" onClick={() => setColor(colors[Math.floor((Math.random()*colors.length))])}>Random Color</button>
            <button className="bn632-hover bn20" onClick={togglePurpleDiv}>
                {colors.includes("purple") ? "Remove Purple Circle" : "Add Purple Circle"}
            </button>
        </div>
    );
};

export default TrafficLight;
