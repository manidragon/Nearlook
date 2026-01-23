import { useState, useRef , useEffect} from "react";
import { Star, X, Image as ImageIcon } from "lucide-react";

export default function ReviewDialog({ open, onClose, productId }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [media, setMedia] = useState([]);
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  const fileInputRef = useRef(null);

  if (!open) return null;

  // Open gallery / file picker
  const handleMediaClick = () => {
    fileInputRef.current.click();
  };

  // Store selected images
  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    setMedia(files);
  };

  // Submit review
  const handleSubmit = async () => {
    if (!rating || !comment) {
      alert("Please give a rating and write a review.");
      return;
    }

    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("rating", rating);
    formData.append("comment", comment);

    media.forEach((file) => {
      formData.append("media", file);
    });

    try {
      // Example API endpoint
      const res = await fetch("http://localhost:8080/api/reviews", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Review submitted successfully!");
        setRating(0);
        setComment("");
        setMedia([]);
        onClose();
      } else {
        alert("Failed to submit review.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error while submitting review.");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white text-gray w-full h-full md:w-[520px] md:h-auto md:rounded-lg shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h3 className="font-semibold text-lg">Write a review</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 hover:text-gray-300" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          
          {/* Stars */}
          <div>
            <p className="text-sm mb-2 text-gray">
              Rate this product
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-7 h-7 cursor-pointer transition ${
                    (hover || rating) >= i
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-400"
                  }`}
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
            {rating > 0 && (
              <p className="text-xs text-gray-400 mt-1">
                You rated this {rating} star{rating > 1 && "s"}
              </p>
            )}
          </div>

          {/* Textarea */}
          <div>
            <textarea
              rows={6}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share details of your own experience with this product"
              className="bg-[#f2f1f1]  text-black w-full  border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Media Upload */}
          <button
            type="button"
            onClick={handleMediaClick}
            className="w-full flex items-center justify-center gap-2  hover:bg-orange-600 hover:text-white border border-white/10 px-4 py-2 rounded-lg text-sm transition duration-200"
          >
            <ImageIcon className="w-4 h-4" />
            Add photos and videos
          </button>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            hidden
            onChange={handleMediaChange}
          />

          {/* Preview */}
          {media.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {media.map((file, i) => (
                <div
                  key={i}
                  className="bg-orange-600 px-2 py-1 rounded text-xs"
                >
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded text-sm hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="btn-org rounded text-sm"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
