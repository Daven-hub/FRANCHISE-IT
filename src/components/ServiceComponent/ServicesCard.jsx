import { Link } from "react-router-dom";

export default function ServicesCard({ service, isHovered, onHover, onLeave }) {
  return (
    <div 
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      
      <div className="relative p-6 h-full bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="flex items-start mb-4">
          <div className="text-3xl mr-3 text-primary">{service.icon}</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">{service.title}</h3>
        </div>

        <div className="relative h-40 sm:h-48 mb-4 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 text-sm sm:text-base md:text-lg">{service.description}</p>

        <div className="flex justify-between items-center">
          <Link
            to={`/service/${service.key}/${service.id}`}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm sm:text-base rounded-full shadow-md transition-colors duration-300 hover:shadow-lg animate__animated hover:animate__pulse"
          >
            Explorer
          </Link>
        </div>
      </div>
    </div>
  );
}
