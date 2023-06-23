import FooterLinks from "../components/FooterLinks";
import AppleStoreImg from "../assets/AppStoreLogo.svg";
import GooglePlayImg from "../assets/GooglePlayLogo.svg";
import ScrollUpButton from "../components/ScrollUpButton";

const Footer = () => {
  return (
    <footer className="relative border-t-2 py-12">
      <div className="flex flex-col-reverse justify-evenly gap-12 md:w-4/5 md:flex-row md:items-start md:gap-0">
        <FooterLinks />
        <div className="flex flex-col items-center">
          <h2 className="text-center font-extrabold">
            Download the application
          </h2>
          <div className="flex gap-1">
            <a href="#">
              <img
                src={AppleStoreImg}
                className="h-8 object-cover"
                alt="app store"
              />
            </a>
            <a href="#">
              <img
                src={GooglePlayImg}
                className="h-8 object-cover"
                alt="google play"
              />
            </a>
          </div>
        </div>
      </div>
      <ScrollUpButton />
    </footer>
  );
};

export default Footer;
