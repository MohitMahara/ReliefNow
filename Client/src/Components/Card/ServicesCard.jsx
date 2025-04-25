import React from "react";

export const ServicesCard = ({title, description, image}) =>{
    return(
        <div className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition duration-300">
        <img src={image} alt={title} className="w-full h-50 object-cover rounded-t-lg mb-4" /> 
            <div>
                <h3 className="text-2xl font-semibold text-indigo-600">{title}</h3>
                <p className="mt-4 text-gray-600">{description}</p>
            </div>        
        </div>
    )
}