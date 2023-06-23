import { FC, ImgHTMLAttributes, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
        <Skeleton className="skeleton absolute inset-0 z-20" inline={true} />
      )}
      {!loading && children}
    </div>
  );
};

export default LazyImage;
