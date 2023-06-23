import Card from "./Card";

const Catalog = () => {
  return (
    <div className=" flex flex-col items-center gap-16 bg-slate-200 py-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold text-darkBlue">
          We're here for you
        </h2>
        <p className="max-w-xl px-2 text-gray-500 lg:max-w-3xl">
          Visits start at $79 for a 15 min consultation, or could be free
          depending on your insurance. See{" "}
          <span className="underline">costs</span> for more information.
        </p>
      </div>
      <div className="grid min-w-[%75] gap-16 md:grid-cols-3 md:px-6 lg:px-0">
        <Card title="Cold & Flu" />
        <Card title="Mental health" />
        <Card title="Mental health" />
        <Card title="Headaches" />
        <Card title="Everyday care" />
        <Card title="Allergies" />
      </div>
    </div>
  );
};

export default Catalog;
