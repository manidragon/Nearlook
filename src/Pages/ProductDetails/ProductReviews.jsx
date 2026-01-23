import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";

const reviewsData = [
  {
    id: 1,
    name: "Jithesh Raj",
    rating: 5,
    title: "Must Buy!",
    comment:
      "Super quality and great value for money. Only thing is the cover is small and very thin.",
    date: "5 months ago",
    verified: true,
    likes: 12,
    dislikes: 1,
    images: [
      "https://via.placeholder.com/80",
      "https://via.placeholder.com/80",
    ],
  },
  {
    id: 2,
    name: "Happu Kumar",
    rating: 5,
    title: "Terrific purchase",
    comment: "Everything is best!",
    date: "6 months ago",
    verified: true,
    likes: 9,
    dislikes: 0,
    images: [],
  },
];

const ratingStats = {
  average: 4.6,
  total: 42238,
  breakdown: {
    5: 30000,
    4: 8000,
    3: 2000,
    2: 1500,
    1: 738,
  },
};

export default function ProductReviews() {
  const [filter, setFilter] = useState("ALL");

  const filteredReviews =
    filter === "ALL"
      ? reviewsData
      : reviewsData.filter((r) => r.rating === Number(filter));

  const maxCount = Math.max(...Object.values(ratingStats.breakdown));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Ratings & Reviews</h2>
        <button className="border px-4 py-2 rounded text-sm hover:bg-gray-100">
          Rate Product
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Summary */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl font-bold">
              {ratingStats.average}
            </div>
            <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
              {ratingStats.average}
              <Star className="w-4 h-4 ml-1 fill-white" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            {ratingStats.total.toLocaleString()} Ratings & Reviews
          </p>

          {/* Star Breakdown */}
          <div className="mt-4 space-y-2">
            {Object.entries(ratingStats.breakdown)
              .reverse()
              .map(([star, count]) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="text-sm w-6">{star}★</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-green-500 rounded"
                      style={{
                        width: `${(count / maxCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-12">
                    {count}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 h-fit">
          {["ALL", 5, 4, 3, 2, 1].map((val) => (
            <button
              key={val}
              onClick={() => setFilter(val)}
              className={`px-4 py-2 rounded-full border text-sm ${
                filter === val
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {val === "ALL" ? "All" : `${val}★`}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8 space-y-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="border-b pb-6 last:border-none"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-600 text-white text-sm px-2 py-1 rounded flex items-center">
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
              <div className="flex gap-2 mb-3">
                {review.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="review"
                    className="w-20 h-20 object-cover rounded border"
                  />
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span>{review.name}</span>
                {review.verified && (
                  <span className="flex items-center text-green-600 gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Verified Purchase
                  </span>
                )}
                <span>{review.date}</span>
              </div>

              <div className="flex items-center gap-4">
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

      {/* All Reviews */}
      <div className="text-center mt-6">
   
<button
  onClick={() => navigate("/product/iphone15/reviews")}
  className="text-blue-600 hover:underline text-sm"
>
  All 42,238 reviews
</button>
      </div>
    </div>
  );
}
