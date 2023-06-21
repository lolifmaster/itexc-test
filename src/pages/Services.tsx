import ServicesHero from "../components/ServicesHero";
import Catalog from "../components/Catalog";
import HospitalSearch from "../components/HospitalSearch";
import SwiperComments from "../components/SwiperComments";

const Services = () => {
  return (
    <section id="services" className="space-y-20">
      <ServicesHero />
      <Catalog />
      <HospitalSearch />
      <SwiperComments />
    </section>
  );
};

export default Services;
