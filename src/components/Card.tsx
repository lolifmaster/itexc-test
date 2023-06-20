import { FC } from "react";
import { Icons } from "./Icons";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="space-y-6 bg-slate-50 p-8">
      <div className="flex w-full justify-between">
        <h3 className="font-semibold ">{title}</h3>
        <Icons.cold />
      </div>
      <ul className="text-start">
        <li className="list-inside list-disc pl-2">Cough</li>
        <li className="list-inside list-disc pl-2">Headaches</li>
        <li className="list-inside list-disc pl-2">Nausea & vomiting</li>
        <li className="list-inside list-disc pl-2">Fever</li>
      </ul>
    </div>
  );
};

export default Card;
