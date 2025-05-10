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
      <div className=" inset-0 opacity-10 relative overflow-hidden"
        style={{
          // backgroundImage: "radial-gradient(circle at 30% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)",
        }}
      />

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-grid-blue-900/[0.02]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2VlZjJmZiIvPjxwYXRoIGQ9Ik0zMCAxMGMyMC4wMDUgMCAzMCA5Ljk5NSAzMCAzMHMtOS45OTUgMzAtMzAgMzBTMCA1MC4wMDUgMCAzMCA5Ljk5NSAxMCAzMCAxMHptMCAyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHMtOC45NTQgMjAtMjAgMjBTMTAgNDEuMDQ2IDEwIDMwczguOTU0LTIwIDIwLTIweiIgZmlsbD0iI2QwZDRmZiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

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
