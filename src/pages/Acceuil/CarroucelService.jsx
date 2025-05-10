import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServicesCard from "../../components/ServiceComponent/ServicesCard";

export default function NosServices({ services }) {
  const allServices = Object.values(services).flatMap((serviceCategory) =>
    serviceCategory.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
      image: item.image,
      priceRange: item.priceRange,
      features: item.features,
      technologies: item.technologies,
      key: item.key,
      id: item.id,
    }))
  );

  return (
    <div className="">
      <div className="text-center mb-12 md:mb-20 pt-12 md:pt-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-primary mb-4 md:mb-6">
          Expertise
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
          Découvrez nos solutions sur mesure, conçues pour propulser votre
          entreprise à un niveau supérieur.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {allServices.map((service, index) => (
          <SwiperSlide key={index}>
            <ServicesCard service={service} isHovered={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}
