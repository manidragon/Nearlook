import { useState, useMemo } from "react";
import { Star, CheckCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@mui/material";
import ReviewDialog from "./ReviewDialog";

// Mock Reviews Data
const allReviews = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  rating: [5, 4, 3, 5, 4][i % 5],
  title: "Amazing Product",
  comment:
    "Build quality is excellent and performance is smooth. Camera and battery life are impressive.",
  date: `${i + 1} days ago`,
  verified: true,
  likes: Math.floor(Math.random() * 50),
  dislikes: Math.floor(Math.random() * 5),
  images:
    i % 3 === 0
      ? [
          "https://api.spicezgold.com/download/file_1734528862997_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg",
          "https://api.spicezgold.com/download/file_1734528862997_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg",
          "https://api.spicezgold.com/download/file_1734528862997_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg",
        ]
      : [],
}));

export default function ReviewsPage() {
  const [filter, setFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(5);
  const [openReview, setOpenReview] = useState(false);

  const perPage = 5;

  // Filter reviews
  const filtered = useMemo(() => {
    return filter === "ALL"
      ? allReviews
      : allReviews.filter((r) => r.rating === Number(filter));
  }, [filter]);

  // Sort (latest first)
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => b.id - a.id);
  }, [filtered]);

  // Visible reviews
  const visibleReviews = useMemo(() => {
    return sorted.slice(0, visibleCount);
  }, [sorted, visibleCount]);

  const canLoadMore = visibleCount < sorted.length;
  const canShowLess = visibleCount > perPage;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm my-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-base md:text-[16px] lg:text-[18px]">
          All Reviews ({filtered.length})
        </h2>

        <Button
          className="btn-org text-white"
          onClick={() => setOpenReview(true)}
        >
          <span className="text-[8px] md:text-[12px] lg:text-[14px]">
            Write a Review
          </span>
        </Button>
      </div>

      {/* Star Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["ALL", 5, 4, 3, 2, 1].map((val) => (
          <button
            key={val}
            onClick={() => {
              setFilter(val);
              setVisibleCount(perPage); // reset view
            }}
            className={`px-4 py-2 rounded-full border text-sm ${
              filter === val
                ? "bg-orange-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {val === "ALL" ? "All" : `${val}★`}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-300 pb-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-600 text-white px-2 py-1 rounded text-sm flex items-center">
                {review.rating}
                <Star className="w-4 h-4 ml-1 fill-white" />
              </div>
              <h4 className="font-semibold">{review.title}</h4>
            </div>

            <p className="text-gray-700 text-sm mb-3">
              {review.comment}
            </p>

            {/* Images */}
            {review.images.length > 0 && (
              <div className="flex gap-2 mb-3 flex-wrap">
                {review.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="review"
                    className="w-24 h-24 object-cover rounded"
                  />
                ))}
              </div>
            )}

            <p className="text-base font-medium">{review.name}</p>

            <div className="flex justify-between flex-col md:flex-row md:items-center text-sm text-gray-500 gap-2 md:gap-0">
              <div className="flex items-center gap-2">
                {review.verified && (
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Verified Purchase
                  </span>
                )}
                <span>{review.date}</span>
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-1 hover:text-black">
                  <ThumbsUp className="w-4 h-4" />
                  {review.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-black">
                  <ThumbsDown className="w-4 h-4" />
                  {review.dislikes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Controls */}
      <div className="flex justify-center gap-6 mt-8">
        {canLoadMore && (
          <button
            onClick={() =>
              setVisibleCount((prev) => prev + perPage)
            }
            className="font-bold text-orange-600 hover:underline text-sm md:text-base"
          >
            Load More Reviews
          </button>
        )}

        {canShowLess && (
          <button
            onClick={() => setVisibleCount(perPage)}
            className="font-bold text-gray-500 hover:underline text-sm md:text-base"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Review Dialog */}
      <ReviewDialog
        open={openReview}
        onClose={() => setOpenReview(false)}
        productId="iphone15"
      />
    </div>
  );
}
