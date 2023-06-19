import Link from "./Link";

const index = () => {
  return (
    <ul className="flex items-center gap-4 font-medium">
      <Link name="Home" />
      <Link name="About us" />
      <Link name="Our services" />
      <Link name="Contact us" />
    </ul>
  );
};

export default index;
