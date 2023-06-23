import { FC, ImgHTMLAttributes, useState } from "react";
import { cn } from "../lib/utils";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  divClass?: string;
}

const LazyImage: FC<LazyImageProps> = ({ divClass, children, ...props }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className={cn("relative", divClass)}>
      <img {...props} loading="lazy" onLoad={() => setLoading(false)} />
      {loading && (
        <div className="absolute inset-0 z-20 animate-pulse bg-gray-300" />
      )}
      {!loading && children}
    </div>
  );
};

export default LazyImage;
