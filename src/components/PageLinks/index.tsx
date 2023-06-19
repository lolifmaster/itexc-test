import { FC } from "react";
import Link from "./Link";

interface indexProps extends React.HTMLAttributes<HTMLUListElement> {}

const PageLinks: FC<indexProps> = ({ ...props }) => {
  return (
    <ul {...props}>
      <Link name="Home" href="#home" />
      <Link name="About us" href="#about" />
      <Link name="Our services" href="#services" />
      <Link name="Contact us" href="#contact" />
    </ul>
  );
};

export default PageLinks;
