import React from "react";
import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container mt-10 flex justify-between items-center gap-10">
      {services.map((item, index) => (
        <ServiceCard key={index} {...item} />
      ))}
    </section>
  );
};

export default Services;
