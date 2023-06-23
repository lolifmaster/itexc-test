import FooterLinks from "../components/FooterLinks";
import AppleStoreImg from "../assets/AppStoreLogo.svg";
import GooglePlayImg from "../assets/GooglePlayLogo.svg";

const Footer = () => {
  return (
    <footer className="flex w-4/5 flex-col justify-evenly border-t-2 py-12 md:flex-row md:items-start">
      <FooterLinks />
      <div className="flex flex-col items-center">
        <h2 className="text-center font-extrabold">Download the application</h2>
        <div className="flex gap-2">
          <a href="#">
            <img
              src={AppleStoreImg}
              className="h-7 object-cover"
              alt="app store"
            />
          </a>
          <a href="#">
            <img
              src={GooglePlayImg}
              className="h-7 object-cover"
              alt="google play"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
