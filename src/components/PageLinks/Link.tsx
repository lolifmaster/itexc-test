import { FC } from "react";

interface LinkProps {
  name: string;
  href?: string;
}

const Link: FC<LinkProps> = ({ name, href }) => {
  return (
    <li>
      <a
        className="whitespace-nowrap transition-colors hover:text-slate-600"
        href={href || "#"}
      >
        {name}
      </a>
    </li>
  );
};

export default Link;
