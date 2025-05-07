import { useRef, useState, useEffect } from "react";
import ServicesHeader from "../../components/ServiceComponent/ServicesHeader";
import ServicesControls from "../../components/ServiceComponent/ServicesControls";
import ServicesGrid from "../../components/ServiceComponent/ServicesGrid";
import ServicesList from "../../components/ServiceComponent/ServicesList";
import ServicesPagination from "../../components/ServiceComponent/ServicesPagination";
import servicesData from "../../data/ServiceData/Index";

export default function Services() {
  const ref = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredService, setHoveredService] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  const categories = Object.values(servicesData.services);
  const filteredServices = selectedCategory === "all"
    ? categories.flatMap(category => category.items)
    : categories.find(cat => cat.name === selectedCategory)?.items || [];

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const currentServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="services" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        <ServicesHeader />

        <ServicesControls
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCurrentPage={setCurrentPage}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-indigo-200 h-12 w-12"></div>
            </div>
          </div>
        ) : (
          <>
            {viewMode === "grid" && (
              <ServicesGrid
                services={currentServices}
                hoveredService={hoveredService}
                setHoveredService={setHoveredService}
              />
            )}

            {viewMode === "list" && (
              <ServicesList services={currentServices} />
            )}

            {totalPages > 1 && (
              <ServicesPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
