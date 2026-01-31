import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Share2, ChevronRight, Package } from "lucide-react"


const OrderSuccess = () => {
  const navigate = useNavigate()
  const { orderId } = useParams()
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails(true)
    }, 2800) // animation duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-4">

      {/* OLD ANIMATED SUCCESS CARD */}
      {!showDetails && (
        <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center animate-fade-in">

            <DotLottieReact
              src="https://lottie.host/c517570d-ea65-44a9-ab46-f7a91dd030b0/hVeQUzYWpp.lottie"
              loop
              autoplay
              className="mx-auto w-48"
            />

            <h2 className="text-2xl font-semibold text-green-600 mt-4">
              Order Placed Successfully
            </h2>

            <p className="text-gray-600 mt-2">
              Your order <span className="font-semibold">#{orderId}</span> has been confirmed
            </p>

          </div>
        </div>
      )}

      {/* FULL FLIPKART-STYLE PAGE */}
      {showDetails && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-in">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-4">

            {/* Header */}
            <div className="bg-white p-5 rounded shadow-sm flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">
                  Thanks for shopping with us!
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Delivery by <span className="font-medium">Sun, Jan 25th '26</span>
                </p>
                <button
                  onClick={() => navigate(`/my-orders/${orderId}`)}
                  className="text-orange-600 text-sm mt-2 hover:underline"
                >
                  Track & manage order
                </button>
              </div>

              <Package size={48} className="text-green-600" />
            </div>

            {/* Delivery Info */}
            <div className="bg-white p-5 rounded shadow-sm">
              <h3 className="font-semibold mb-3">
                Delivery by Sun, Jan 25th '26
              </h3>

              <div className="flex gap-3 text-sm text-gray-700">
                <Package className="text-orange-500" size={20} />
                <div>
                  <p className="font-medium">
                    Delivery requires an OTP
                  </p>
                  <p className="text-gray-600 mt-1">
                    We will open the package at your doorstep to check for damages
                    or wrong product delivery. An OTP will be shared when the order
                    is out for delivery.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Share the OTP with the agent to confirm open box delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <button
              onClick={() => navigate("/")}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded font-semibold transition"
            >
              Continue Shopping
            </button>

            {/* Send Order Details */}
            <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <Share2 size={18} className="text-orange-600" />
                <span className="font-medium">Send Order Details</span>
              </div>
              <ChevronRight />
            </div>

            {/* Recommendations */}
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-3">
                You might be also interested in
              </h3>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="min-w-[140px] border rounded p-2 flex flex-col items-center hover:shadow cursor-pointer"
                  >
                    <div className="w-24 h-24 bg-gray-200 rounded mb-2" />
                    <p className="text-xs text-center">
                      Recommended Item
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-4">

            {/* Go To Orders */}
            <div className="bg-white p-4 rounded shadow-sm flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  Why call? Just click!
                </p>
                <button
                  onClick={() => navigate(`/my-orders/${orderId}`)}
                  className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm"
                >
                  Go to My Orders
                </button>
              </div>
              <Package size={40} className="text-orange-600" />
            </div>

            {/* Address */}
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">MAREES SAKTHIVEL</p>
                <button className="text-orange-600 text-sm hover:underline">
                  Change
                </button>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                12 | Bala Nagar near GPA mahal,  
                Bommayakoundan patti, Theni - 625531,  
                Theni Allinagaram,  
                Tamil Nadu - 625531
              </p>

              <p className="text-sm mt-2">
                Phone number:{" "}
                <span className="font-medium">8838542598</span>
              </p>

              <button className="text-orange-600 text-sm mt-2 hover:underline">
                Change or Add number
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderSuccess
