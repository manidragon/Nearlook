import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  X,
  MessageCircle,
  Home,
  User,
  Copy
} from "lucide-react";

/* ------------------ DUMMY DATA INSIDE THIS FILE ------------------ */
const orders = [
  {
    id: 1,
    orderId: "OD33271233986702240",
    name: "Analog-Digital Watch - For Men & Women",
    price: "₹506",
    image: "https://picsum.photos/100/100?random=1",
    status: "cancelled",
    statusText: "Cancelled on Nov 07, 2024",
    message: "Sorry, your order was cancelled since the seller couldn't deliver it.",
    color: "Black"
  },
  {
    id: 2,
    orderId: "OD33271233986702241",
    name: "SAFARI ASHPER CB With 6 Pockets 30 L Lap...",
    price: "₹479",
    image: "https://picsum.photos/100/100?random=2",
    status: "delivered",
    statusText: "Delivered on Oct 24, 2024",
    message: "Your item has been delivered",
    color: "Black",
    canReview: true
  },
  {
    id: 3,
    orderId: "OD33271233986702242",
    name: "PROVOGUE Spacy unisex with rain cover an...",
    price: "₹504",
    image: "https://picsum.photos/100/100?random=3",
    status: "delivered",
    statusText: "Delivered on Jun 21, 2024",
    message: "Your item has been delivered",
    color: "Black",
    canReview: true
  }
];

/* ------------------ COMPONENT ------------------ */
const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
const orders = [
  {
    id: 1,
    orderId: "OD33271233986702240",
    name: "Analog-Digital Watch - For Men & Women",
    price: "₹506",
    image: "https://picsum.photos/100/100?random=1",
    status: "cancelled",
    statusText: "Cancelled on Nov 07, 2024",
    message: "Sorry, your order was cancelled since the seller couldn't deliver it.",
    color: "Black"
  },
  {
    id: 2,
    orderId: "OD33271233986702241",
    name: "SAFARI ASHPER CB With 6 Pockets 30 L Lap...",
    price: "₹479",
    image: "https://picsum.photos/100/100?random=2",
    status: "delivered",
    statusText: "Delivered on Oct 24, 2024",
    message: "Your item has been delivered",
    color: "Black",
    canReview: true
  },
  {
    id: 3,
    orderId: "OD33271233986702242",
    name: "PROVOGUE Spacy unisex with rain cover an...",
    price: "₹504",
    image: "https://picsum.photos/100/100?random=3",
    status: "delivered",
    statusText: "Delivered on Jun 21, 2024",
    message: "Your item has been delivered",
    color: "Black",
    canReview: true
  }
]; const order = orders.find((o) => o.orderId === orderId);

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-gray-600 mb-4">Order not found</p>
        <button
          onClick={() => navigate("/my-orders")}
          className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Back to My Orders
        </button>
      </div>
    );
  }

  const isCancelled = order.status === "cancelled";

  return (
    <section className="bg-gray-50 min-h-screen py-6">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Breadcrumb */}
        <div className=" hidden md:flex mb-4 text-sm text-gray-600 flex flex-nowrap overflow-x-auto items-center gap-1">
          <span
            className="cursor-pointer text-[10px] sm:text-[12px] md:text-[14px] hover:text-orange-600"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <ChevronRight size={14} />
          <span
            className="cursor-pointer hover:text-orange-600 text-[10px] sm:text-[12px] md:text-[14px]"
            onClick={() => navigate("/my-account")}
          >
            My Account
          </span>
          <ChevronRight size={14} />
          <span
            className="cursor-pointer hover:text-orange-600"
            onClick={() => navigate("/my-orders")}
          >
            My Orders
          </span>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium">
            {order.orderId}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-4">

            {/* Product Card */}
            <div className="bg-white rounded shadow-sm p-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-lg font-semibold mb-1">
                    {order.name}
                  </h1>
                  <p className="text-sm text-gray-500 mb-1">
                    Seller: {order.seller}
                  </p>
                  <p className="text-xl font-semibold text-gray-900">
                    {order.price}
                  </p>
                </div>

                <img
                  src={order.image}
                  alt={order.name}
                  className="w-20 h-20 object-cover rounded"
                />
              </div>

              {/* Status Timeline */}
              <div className="mt-6 flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500" />
                  <div
                    className={`w-0.5 h-12 ${
                      isCancelled
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                  />
                  <div
                    className={`w-5 h-5 rounded-full ${
                      isCancelled
                        ? "bg-red-500"
                        : "bg-green-500"
                    } flex items-center justify-center`}
                  >
                    {isCancelled && (
                      <X className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-6">
                    Order Confirmed
                  </p>
                  <p
                    className={`font-medium ${
                      isCancelled
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {isCancelled
                      ? "Cancelled"
                      : "Delivered"}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                {order.message}
              </p>

              {/* Chat */}
              <button className="mt-4 w-full py-2 border border-gray-300 rounded flex items-center justify-center gap-2 hover:bg-gray-50">
                <MessageCircle size={18} />
                Chat with us
              </button>

              {/* Order ID */}
              <div className="mt-4 pt-4 border-t text-sm flex items-center gap-2 text-gray-600">
                Order #{order.orderId}
                <button
                  className="hover:text-blue-600"
                  onClick={() =>
                    navigator.clipboard.writeText(order.orderId)
                  }
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>

{/* RIGHT COLUMN */}
<div className="space-y-4">

  {/* DELIVERY DETAILS */}
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="font-semibold mb-4">
      Delivery details
    </h3>

    <div className="space-y-4">
      <div className="flex gap-3">
        <Home className="w-5 h-5 text-gray-600 mt-0.5" />
        <div>
          <p className="text-sm font-medium">Home</p>
          <p className="text-sm text-gray-600">
            {order.address}
          </p>
        </div>
      </div>

      <div className="flex gap-3 pt-3 border-t">
        <User className="w-5 h-5 text-gray-600 mt-0.5" />
        <div>
          <p className="text-sm font-medium">
            {order.customerName}
          </p>
          <p className="text-sm text-gray-600">
            {order.phone}
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* PRICE DETAILS */}
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="font-semibold mb-4">
      Price details
    </h3>

    <div className="space-y-3 text-sm">

      {/* Listing Price */}
      <div className="flex justify-between">
        <span className="text-gray-600">Listing price</span>
        <span className="line-through text-gray-500">
          ₹{order.listingPrice || "2,999"}
        </span>
      </div>

      {/* Special Price */}
      <div className="flex justify-between">
        <span className="text-gray-600">Special price</span>
        <span className="font-medium text-green-600">
          {order.price}
        </span>
      </div>

      {/* Total Fees (Expandable) */}
      <details className="group border-t pt-2">
        <summary className="flex justify-between items-center cursor-pointer text-gray-600">
          <span>Total fees</span>
          <span className="flex items-center gap-1 font-medium">
            ₹{order.totalFees || "50"}
            <svg
              className="w-4 h-4 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </summary>

        <div className="mt-2 text-xs text-gray-500 space-y-1">
          <div className="flex justify-between">
            <span>Delivery charge</span>
            <span>₹{order.totalFees || "50"}</span>
          </div>
          <div className="flex justify-between">
            <span>Platform fee</span>
            <span>₹0</span>
          </div>
        </div>
      </details>

      {/* Total Amount */}
      <div className="pt-3 border-t flex justify-between font-semibold">
        <span>Total amount</span>
        <span>
          {order.totalAmount || "₹479"}
        </span>
      </div>

      {/* Payment Method */}
      <div className="pt-3 border-t">
        <div className="flex justify-between items-center border rounded-lg px-3 py-2">
          <span className="text-gray-600">
            Payment method
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="border rounded px-2 py-0.5 text-xs">
              ₹
            </span>
            {order.paymentMethod || "Cash On Delivery"}
          </span>
        </div>
      </div>

      {/* Download Invoice */}
      <button className="w-full mt-3 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17h16" />
        </svg>
        Download Invoice
      </button>
    </div>
  </div>

  {/* OFFERS EARNED */}
  <details className="bg-white rounded-xl shadow-sm p-4 group">
    <summary className="flex justify-between items-center cursor-pointer">
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 15l-2 2-4-4m10-2l2-2 4 4m-6 6V3" />
        </svg>
        <span className="font-medium">
          Offers earned
        </span>
      </div>

      <svg
        className="w-4 h-4 transition-transform group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <div className="mt-3 text-sm text-gray-600 space-y-1">
      <p>🎉 You earned 10 SuperCoins</p>
      <p>Use coins on your next purchase</p>
    </div>
  </details>

</div>

        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
