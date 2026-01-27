import React from "react"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export const OrderFailed = () => {
  return (
    <section className="w-full min-h-screen p-10 py-20 flex items-center justify-center flex-col gap-3 bg-gray-100">

      {/* Failed Image */}
      <img
        src="/delete.png"
        alt="Order Failed"
        className="w-[70px] sm:w-[120px]"
      />
                  <DotLottieReact
              src="https://lottie.host/c517570d-ea65-44a9-ab46-f7a91dd030b0/hVeQUzYWpp.lottie"
              loop
              autoplay
              className="mx-auto w-48"
            />

      {/* Title */}
      <h3 className="mb-0 text-[20px] sm:text-[25px] font-semibold text-gray-800">
        Your order is failed
      </h3>

      {/* Description */}
      <p className="mt-0 text-center text-gray-600 max-w-md">
        Your order has failed due to some reason. Please try again or contact
        support if the issue persists.
      </p>

      {/* Back Button */}
      <Link to="/">
        <Button
          variant="outlined"
          className="!mt-3 !border-orange-600 !text-orange-600 hover:!bg-orange-50"
        >
          Back to Home
        </Button>
      </Link>

    </section>
  )
}

export default OrderFailed
