import AboutHealth from "../components/AboutHealth";
import FeaturesHealth from "../components/FeaturesHealth";
import InstallTag from "../components/InstallTag";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="mx-auto max-w-screen-xl space-y-40 px-2 md:px-8"
      >
        <AboutHealth />
        <FeaturesHealth />
      </section>
      <InstallTag />
    </>
  );
};

export default About;
