import AboutHealth from "../components/AboutHealth";
import FeaturesHealth from "../components/FeaturesHealth";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-screen-xl space-y-40 px-2 md:px-8"
    >
      <AboutHealth />
      <FeaturesHealth />
    </section>
  );
};

export default About;
