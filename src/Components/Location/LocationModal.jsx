import React, { useEffect } from "react";
import { useGeolocation } from "./hooks/useGeolocation";
import { reverseGeocode } from "./utils/reversGeocode";

const LocationModal = ({ onClose, setAddress }) => {
  const { location, error, getLocation } = useGeolocation();

  const detectLocation = () => {
    getLocation(); // this triggers browser permission popup
  };

  // 🔴 THIS IS REQUIRED
  useEffect(() => {
    if (!location) return;

    (async () => {
      const data = await reverseGeocode(location.lat, location.lng);

      const formatted = {
        city: data.address.city || data.address.town,
        state: data.address.state,
        pincode: data.address.postcode,
        fullAddress: data.display_name,
      };

      setAddress(formatted);
      onClose(); // close modal after success
    })();
  }, [location, setAddress, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-md p-5">
        <h2 className="font-semibold text-lg mb-4">
          Choose your delivery location
        </h2>

        <button
          onClick={detectLocation}
          className="w-full border p-3 rounded-md hover:bg-gray-100"
        >
          Use current location
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-blue-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
