import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function Card(props) {
    return (
        <div className="max-w-xl m-4 border border-gray-300 rounded-lg shadow-md flex items-center p-4">
            <img src={props.image} alt={props.alt} className="w-48 h-48" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{props.title}</h2>
                <p className="text-gray-600 text-lg mt-2">{props.description}</p>
                <div className="text-center mt-4">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded border-gray-400 shadow-lg transition-colors duration-300">
                            <span className="flex items-center">
                                <FaGithub className="mr-2" />
                                {props.buttonText}
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;