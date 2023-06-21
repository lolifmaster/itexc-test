import { Icons } from "./Icons";
import Avatar from "../assets/avatar.png";

// interface CommentProps {
//   title: string;
//   rating: number;
//   comment: string;
// }

const Comment = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h4 className="border-b-2 border-orange border-opacity-50 px-4 pb-2 font-semibold text-orange">
        Testimonial
      </h4>
      <h2 className="text-2xl font-semibold">You're in safe hands</h2>
      <p className="flex items-center gap-2 text-slate-50">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Icons.star key={i} className="inline-block fill-slate-50" />
          ))}
      </p>
      <p className="w-4/5 text-lg md:w-3/4">
        Our caring and supportive team has experience working with patients
        face-to-face and dealing with mental health issues. Spend less time
        searching for help and more time connecting with someone you can trust.
      </p>

      <img
        src={Avatar}
        alt="profile"
        className="h-12 w-12 rounded-full"
        loading="lazy"
      />
      <div>
        <p className="text-lg font-semibold">Christopher Nolan</p>
        <p className="text-sm">CEO, Interstellar</p>
      </div>
    </div>
  );
};

export default Comment;
