import React from "react";
import { Link } from "react-router-dom";
import { ICON_MAP } from "../constants";
import { Service } from "../types";

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="w-12 h-12 bg-corporate-50 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
          {ICON_MAP[service.icon]}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* ✅ Learn More */}
        <Link
          to={service.path}
          className="mt-auto text-brand font-bold text-sm flex items-center space-x-2 hover:translate-x-1 transition-transform"
        >
          <span>Learn More</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
