import { CheckCircle, Package, Truck, Home } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

export default function OrderPlaced() {
  const navigate = useNavigate()
  const { orderId } = useParams()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-3">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Success Header */}
        <div className="bg-green-600 text-white px-5 py-4 flex items-center gap-3">
          <CheckCircle size={28} />
          <div>
            <h2 className="text-lg font-semibold">Order Placed Successfully</h2>
            <p className="text-sm opacity-90">
              Thank you for shopping with us
            </p>
          </div>
        </div>

        {/* Order Info */}
        <div className="p-5 space-y-5">

          {/* Order ID Card */}
          <div className="bg-gray-50 border rounded-md p-4">
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="text-lg font-semibold text-gray-800">
              #{orderId || "OD123456789"}
            </p>
          </div>

          {/* Delivery Timeline */}
          <div>
            <p className="font-semibold mb-3 text-gray-700">
              Order Status
            </p>

            <div className="flex items-center justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <p className="text-xs mt-1">Placed</p>
              </div>

              <div className="flex-1 h-1 bg-green-600 mx-2" />

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center">
                  <Package size={20} />
                </div>
                <p className="text-xs mt-1">Packed</p>
              </div>

              <div className="flex-1 h-1 bg-gray-300 mx-2" />

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <p className="text-xs mt-1">Shipped</p>
              </div>
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <p className="text-sm text-blue-700">
              Estimated Delivery
            </p>
            <p className="font-semibold text-blue-900">
              Within 3 - 5 Business Days
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => navigate(`/my-orders/${orderId}`)}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
            >
              View Order
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-md font-semibold transition flex items-center justify-center gap-2"
            >
              <Home size={18} />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
