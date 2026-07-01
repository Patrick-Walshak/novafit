import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviews?: number;
}

export default function StarRating({ rating, reviews }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={
            rating >= star
              ? "fill-yellow-400 text-yellow-400"
              : rating >= star - 0.5
              ? "fill-yellow-200 text-yellow-400"
              : "fill-none text-sand"
          }
        />
      ))}
      {reviews !== undefined && (
        <span className="text-xs text-cocoa/60 ml-1">
          {reviews.toLocaleString()} reviews
        </span>
      )}
    </div>
  );
}