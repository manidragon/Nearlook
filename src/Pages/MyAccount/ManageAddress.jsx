import React, { useState } from "react";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";
import { TextField, MenuItem } from "@mui/material";


const emptyForm = {
  name: "",
  phone: "",
  pincode: "",
  locality: "",
  address: "",
  city: "",
  state: "",
  landmark: "",
  alternatePhone: "",
  type: "HOME",
};

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "MAREES SAKTHIVEL",
      phone: "8838542598",
      pincode: "625531",
      locality: "Allinagaram",
      address: "12, Bala Nagar 3rd Street, Bommayakoundan patti, Theni",
      city: "Theni",
      state: "Tamil Nadu",
      landmark: "Near Temple",
      alternatePhone: "",
      type: "HOME",
    },
  ]);

  const muiOrangeStyle = {
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "oklch(63.7% 0.237 25.331)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "oklch(63.7% 0.237 25.331)",
  },
};


  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!form.name || !form.phone || !form.address || !form.pincode) {
      alert("Please fill required fields");
      return;
    }

    if (editingId) {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === editingId ? { ...form, id: editingId } : a
        )
      );
    } else {
      setAddresses((prev) => [...prev, { ...form, id: Date.now() }]);
    }

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (addr) => {
    setForm(addr);
    setEditingId(addr.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this address?")) {
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <section className="py-4 lg:py-6 pb-20 w-full bg-gray-100">
      <div className="container flex flex-col md:flex-row gap-5">
        {/* LEFT SIDEBAR */}
        <div className="col1 w-full md:w-[20%] hidden lg:block">
          <AccountSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col2 w-full lg:w-[75%]">
          <div className="bg-white shadow-md rounded-md">
            {/* HEADER */}
            <div className="py-5 px-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Manage Addresses</h2>
              <button
                onClick={() => {
                  setShowForm(true);
                  setForm(emptyForm);
                  setEditingId(null);
                }}
                className="text-orange-600 font-medium"
              >
                + ADD A NEW ADDRESS
              </button>
            </div>

            {/* FORM */}
{showForm && (
  <div className="p-5 bg-orange-50 border-b">
    <button className="mb-4 px-4 py-2 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-700 transition">
      Use my current location
    </button>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* NAME */}
      <div className="form-group w-full">
        <TextField
          fullWidth
          name="name"
          label="Name *"
          variant="outlined"
          value={form.name}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

      {/* PHONE */}
      <div className="form-group w-full">
        <TextField
          fullWidth
          name="phone"
          label="10-digit mobile number *"
          variant="outlined"
          value={form.phone}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

      {/* PINCODE */}
      <div className="form-group w-full">
        <TextField
          fullWidth
          name="pincode"
          label="Pincode *"
          variant="outlined"
          value={form.pincode}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

      {/* LOCALITY */}
      <div className="form-group w-full">
        <TextField
          fullWidth
          name="locality"
          label="Locality"
          variant="outlined"
          value={form.locality}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

      {/* ADDRESS */}
      <div className="form-group w-full md:col-span-2">
        <TextField
          fullWidth
          multiline
          rows={3}
          name="address"
          label="Address (Area and Street) *"
          variant="outlined"
          value={form.address}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

      {/* CITY */}
      <div className="form-group w-full">
        <TextField
          fullWidth
          name="city"
          label="City / District / Town"
          variant="outlined"
          value={form.city}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

      {/* STATE */}
      <div className="form-group w-full">
        <TextField
          select
          fullWidth
          name="state"
          label="State"
          variant="outlined"
          value={form.state}
          onChange={handleChange}
          sx={muiOrangeStyle}
        >
          <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
          <MenuItem value="Kerala">Kerala</MenuItem>
          <MenuItem value="Karnataka">Karnataka</MenuItem>
        </TextField>
      </div>

      {/* LANDMARK */}
      <div className="form-group w-full">
        <TextField
          fullWidth
          name="landmark"
          label="Landmark (Optional)"
          variant="outlined"
          value={form.landmark}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

      {/* ALT PHONE */}
      <div className="form-group w-full">
        <TextField
          fullWidth
          name="alternatePhone"
          label="Alternate Phone (Optional)"
          variant="outlined"
          value={form.alternatePhone}
          onChange={handleChange}
          sx={muiOrangeStyle}
        />
      </div>

    </div>

    {/* ACTION BUTTONS */}
    <div className="mt-6 flex gap-4">
      <button
        onClick={handleSave}
        className="bg-orange-600 text-white px-8 py-2 rounded-md hover:bg-orange-700 transition font-medium"
      >
        SAVE
      </button>

      <button
        onClick={() => {
          setShowForm(false);
          setEditingId(null);
        }}
        className="text-orange-600 px-6 py-2 rounded-md hover:bg-orange-100 transition font-medium"
      >
        CANCEL
      </button>
    </div>

  </div>
)}





            {/* ADDRESS LIST */}
            <div className="p-4 space-y-4">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="border rounded p-4 flex justify-between items-start"
                >
                  <div>
                    <span className="bg-gray-100 text-xs px-2 py-0.5 rounded">
                      {addr.type}
                    </span>
                    <p className="font-semibold mt-1">
                      {addr.name}
                      <span className="ml-2">{addr.phone}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      {addr.address}, {addr.locality}, {addr.city} -{" "}
                      {addr.pincode}, {addr.state}
                    </p>
                  </div>

                  {/* THREE DOT MENU */}
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenMenuId(
                          openMenuId === addr.id ? null : addr.id
                        )
                      }
                      className="p-2 rounded-full hover:bg-orange-100 transition"
                    >
                      <span className="text-xl font-bold">⋮</span>
                    </button>

                    {openMenuId === addr.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white shadow rounded  z-50">
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 text-sm"
                          onClick={() => {
                            setOpenMenuId(null);
                            handleEdit(addr);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 text-sm text-red-500"
                          onClick={() => {
                            setOpenMenuId(null);
                            handleDelete(addr.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {addresses.length === 0 && (
                <p className="text-center text-gray-500">
                  No saved addresses
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageAddress;
