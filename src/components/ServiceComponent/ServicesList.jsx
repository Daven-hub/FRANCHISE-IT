import { Link } from "react-router-dom";

export default function ServicesList({ services }) {
  return (
    <div className="space-y-6 mb-16">
      {services.map((service) => (
        <div
          key={service.id}
          className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-l-4 border-indigo-100 hover:border-indigo-300"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="text-4xl text-primary mb-2">
                {service.icon}
              </div>
              <div className="w-full md:w-40 h-24 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                {/* <span className="text-indigo-600 font-medium">{service.priceRange}</span> */}
              </div>

              <p className="text-gray-600 mb-3">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.slice(0, 3).map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button className=" text-white text-sm rounded-full shadow-md">
                <Link
                  to={`/service/${service.key}/${service.id}`}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm sm:text-base rounded-full shadow-md transition-colors duration-300 hover:shadow-lg animate__animated hover:animate__pulse"
                >
                  Découvrir
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
