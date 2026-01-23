// OrdersPage.jsx
// FULL PAGE WITH WORKING SEARCH + STATUS FILTERS + TIME FILTERS (DESKTOP + MOBILE)

import React, { useState, useContext } from 'react';
import { Search, Star, SlidersHorizontal } from "lucide-react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    onTheWay: false,
    delivered: false,
    cancelled: false,
    returned: false,
    last30Days: false,
    year2024: false,
    year2023: false,
    older: false
  });

  // ----------------------------
  // ORDERS DATA
  // ----------------------------
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
    },
    {
      id: 4,
      orderId: "OD33271233986702243",
      name: "PROVOGUE Spacy unisex with rain cover an...",
      price: "₹504",
      image: "https://picsum.photos/100/100?random=4",
      status: "cancelled",
      statusText: "Cancelled on Jun 12, 2024",
      message:
        "Sorry, your order was cancelled as it could not be delivered due to logistical constraints.",
      color: "Black"
    },
    {
      id: 5,
      orderId: "OD33271233986702244",
      name: "IMPULSE Rucksack bag travel bag for men ...",
      price: "₹1,285",
      image: "https://picsum.photos/100/100?random=5",
      status: "delivered",
      statusText: "Delivered on Nov 17, 2023",
      message: "Your item has been delivered",
      color: "Black",
      canReview: true
    },
    {
      id: 6,
      orderId: "OD33271233986702245",
      name: "STRIKER Men Grey Sports Sandals",
      price: "₹599",
      image: "https://picsum.photos/100/100?random=6",
      status: "delivered",
      statusText: "Delivered on Oct 13, 2023",
      message: "Your item has been delivered",
      color: "Grey",
      size: "10",
      canReview: true
    },
    {
      id: 7,
      orderId: "OD33271233986702246",
      name: "ABREXO Abx2266 Black Dial Silver Bracele...",
      price: "₹296",
      image: "https://picsum.photos/100/100?random=7",
      status: "delivered",
      statusText: "Delivered on Jan 03, 2023",
      message: "Your item has been delivered",
      canReview: true
    }
  ];

  // ----------------------------
  // HELPERS
  // ----------------------------
  const parseDateFromStatus = (statusText) => {
    const match = statusText.match(/on (.+)$/);
    return match ? new Date(match[1]) : null;
  };

  const clearFilters = () => {
    setFilters({
      onTheWay: false,
      delivered: false,
      cancelled: false,
      returned: false,
      last30Days: false,
      year2024: false,
      year2023: false,
      older: false
    });
  };

  const applyFilters = () => {
    setShowFilters(false);
  };

  // ----------------------------
  // FILTER LOGIC
  // ----------------------------
  const filteredOrders = orders.filter(order => {
    // SEARCH
    if (
      searchQuery &&
      !order.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !order.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // STATUS FILTER
    const statusActive =
      filters.onTheWay ||
      filters.delivered ||
      filters.cancelled ||
      filters.returned;

    if (statusActive) {
      let match = false;

      if (filters.delivered && order.status === "delivered") match = true;
      if (filters.cancelled && order.status === "cancelled") match = true;
      if (filters.returned && order.status === "returned") match = true;
      if (filters.onTheWay && order.status === "onTheWay") match = true;

      if (!match) return false;
    }

    // TIME FILTER
    const orderDate = parseDateFromStatus(order.statusText);
    if (!orderDate) return true;

    const now = new Date();
    const daysDiff = (now - orderDate) / (1000 * 60 * 60 * 24);
    const year = orderDate.getFullYear();

    const timeActive =
      filters.last30Days ||
      filters.year2024 ||
      filters.year2023 ||
      filters.older;

    if (timeActive) {
      let match = false;

      if (filters.last30Days && daysDiff <= 30) match = true;
      if (filters.year2024 && year === 2024) match = true;
      if (filters.year2023 && year === 2023) match = true;
      if (filters.older && year < 2023) match = true;

      if (!match) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-1 lg:px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* FILTER SIDEBAR */}
          <aside className="hidden lg:block lg:w-64 bg-white p-4 rounded shadow-sm h-fit">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>

            <div className="mb-6">
              <h3 className="font-semibold text-sm mb-3 text-gray-700">ORDER STATUS</h3>
              <div className="space-y-2">
                {[
                  { key: 'onTheWay', label: 'On the way' },
                  { key: 'delivered', label: 'Delivered' },
                  { key: 'cancelled', label: 'Cancelled' },
                  { key: 'returned', label: 'Returned' }
                ].map(filter => (
                  <label key={filter.key} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters[filter.key]}
                      onChange={(e) => setFilters({ ...filters, [filter.key]: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{filter.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3 text-gray-700">ORDER TIME</h3>
              <div className="space-y-2">
                {[
                  { key: 'last30Days', label: 'Last 30 days' },
                  { key: 'year2024', label: '2024' },
                  { key: 'year2023', label: '2023' },
                  { key: 'older', label: 'Older' }
                ].map(filter => (
                  <label key={filter.key} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters[filter.key]}
                      onChange={(e) => setFilters({ ...filters, [filter.key]: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{filter.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1">

            {/* SEARCH BAR */}
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <div className="flex gap-2 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search your order here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                {context.windowWidth < 992 && (
                  <button
                    onClick={() => setShowFilters(true)}
                    className="px-4 py-3 border border-gray-300 rounded-lg flex items-center gap-2 bg-white"
                  >
                    <SlidersHorizontal size={18} />
                    <span className="hidden sm:inline">Filters</span>
                  </button>
                )}
              </div>
            </div>

            {/* EMPTY STATE */}
            {filteredOrders.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No orders match your filters
              </div>
            )}

            {/* ORDERS LIST */}
            <div className="space-y-4">
              {filteredOrders.map(order => (
                <div
                  key={order.id}
                  onClick={() => navigate(`/my-orders/${order.orderId}`)}
                  className="bg-white rounded shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
                >
                  <div className="p-4 flex flex-col md:flex-row gap-4">
                    <img
                      src={order.image}
                      alt={order.name}
                      className="w-24 h-24 object-cover rounded"
                    />

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{order.name}</h3>
                          {order.color && (
                            <p className="text-sm text-gray-600">Color: {order.color}</p>
                          )}
                          {order.size && (
                            <p className="text-sm text-gray-600">Size: {order.size}</p>
                          )}
                        </div>
                        <div className="lg:text-right">
                          <p className="font-semibold text-lg">{order.price}</p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              order.status === 'delivered' ? 'bg-green-500' : 'bg-red-500'
                            }`}
                          ></span>
                          <span
                            className={`font-medium ${
                              order.status === 'delivered'
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}
                          >
                            {order.statusText}
                          </span>
                        </div>

                        {order.canReview && (
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className="text-orange-600 hover:text-orange-700 flex items-center gap-1 text-sm font-medium"
                          >
                            <Star size={16} />
                            Rate & Review Product
                          </button>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 mt-2">{order.message}</p>
                      <p className="text-xs text-gray-400 mt-2">Order ID: {order.orderId}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-8">
              <p className="text-orange-600 font-medium">No More Results To Display</p>
            </div>

            {/* MOBILE FILTER MODAL */}
            {showFilters && (
              <div className="fixed inset-0 bg-[#000000ab] z-[60] lg:hidden">
                <div className="absolute bottom-12 left-0 right-0 bg-white rounded-t-2xl max-h-[70vh] overflow-y-auto">
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <button onClick={clearFilters} className="text-sm text-gray-500">
                      Clear Filter
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Order Status</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { key: 'onTheWay', label: 'On the way' },
                          { key: 'delivered', label: 'Delivered' },
                          { key: 'cancelled', label: 'Cancelled' },
                          { key: 'returned', label: 'Returned' }
                        ].map(filter => (
                          <button
                            key={filter.key}
                            onClick={() =>
                              setFilters({ ...filters, [filter.key]: !filters[filter.key] })
                            }
                            className={`px-4 py-2 rounded-full border text-sm ${
                              filters[filter.key]
                                ? 'bg-gray-900 text-white border-gray-900'
                                : 'bg-white text-gray-700 border-gray-300'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Order Time</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { key: 'last30Days', label: 'Last 30 days' },
                          { key: 'year2024', label: '2024' },
                          { key: 'year2023', label: '2023' },
                          { key: 'older', label: 'Older' }
                        ].map(filter => (
                          <button
                            key={filter.key}
                            onClick={() =>
                              setFilters({ ...filters, [filter.key]: !filters[filter.key] })
                            }
                            className={`px-4 py-2 rounded-full border text-sm ${
                              filters[filter.key]
                                ? 'bg-gray-900 text-white border-gray-900'
                                : 'bg-white text-gray-700 border-gray-300'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 p-4 flex gap-3">
                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex-1 py-3 border border-gray-300 rounded-lg font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={applyFilters}
                      className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-medium"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
