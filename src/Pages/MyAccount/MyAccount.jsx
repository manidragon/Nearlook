import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";
import { useState } from "react";

const STORAGE_KEY = "nearlook_user_profile";

const MyAccount = () => {

  const [editProfile, setEditProfile] = useState(false);
const [editEmail, setEditEmail] = useState(false);
const [editMobile, setEditMobile] = useState(false);
  const muiOrangeStyle = {
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "oklch(63.7% 0.237 25.331)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "oklch(63.7% 0.237 25.331)",
  },
};

const [profile, setProfile] = useState(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved
    ? JSON.parse(saved)
    : {
        firstName: "Marees",
        lastName: "Sakthivel",
        gender: "Male",
        email: "mareessakthivel007@gmail.com",
        mobile: "+91 8838542598",
      };
});

const saveProfile = (section) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));

  if (section === "profile") setEditProfile(false);
  if (section === "email") setEditEmail(false);
  if (section === "mobile") setEditMobile(false);

  alert("Profile updated successfully");
};


  return (
    <section className="py-3 lg:py-10 w-full">
      <div className="container flex flex-col  lg:flex-row gap-5">
        {/* LEFT SIDEBAR (ONLY ONCE) */}
        <div className="col1 w-full lg:w-[20%]">
          <AccountSidebar />
        </div>

        {/* RIGHT CONTENT */}
<div className="col2 w-full lg:w-[70%]">
  <div className="bg-white shadow-md rounded-md p-6">

    {/* PERSONAL INFORMATION */}
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Personal Information</h3>
        <button
          onClick={() => setEditProfile(!editProfile)}
          className="text-orange-600 text-sm font-medium"
        >
          {editProfile ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-lg">
        <TextField
          label="First Name"
          size="small"
          variant="outlined"
        
          sx={muiOrangeStyle}
            value={profile.firstName}
          disabled={!editProfile}
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
          fullWidth
        />

        <TextField
          label="Last Name"
          size="small"
          value={profile.lastName}
          variant="outlined"
          sx={muiOrangeStyle}
          disabled={!editProfile}
          onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })
          }
          fullWidth
        />
      </div>

      {/* GENDER */}
      <div className="mt-5">
        <p className="text-sm text-gray-600 mb-2">Your Gender</p>
        <div className="flex gap-6">
          {["Male", "Female"].map((g) => (
            <label key={g} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                disabled={!editProfile}
               
        
          
                checked={profile.gender === g}
                onChange={() =>
                  setProfile({ ...profile, gender: g })
                }
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      {editProfile && (
        <div className="mt-5">
<Button
  variant="contained"
  onClick={() => saveProfile("profile")}
  className="!bg-orange-600 hover:!bg-orange-700"
>
  Save
</Button>
        </div>
      )}
    </div>

    <hr />

    {/* EMAIL */}
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Email Address</h3>
        <button
          onClick={() => setEditEmail(!editEmail)}
          className="text-orange-600 text-sm font-medium"
        >
          {editEmail ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="max-w-md">
        <TextField
          label="Email"
          size="small"
            variant="outlined"
          sx={muiOrangeStyle}
          value={profile.email}
          disabled={!editEmail}
          onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })
          }
          fullWidth
        />
      </div>

      {editEmail && (
        <div className="mt-5">
<Button
  variant="contained"
  onClick={() => saveProfile("email")}
  className="!bg-orange-600 hover:!bg-orange-700"
>
  Save
</Button>
        </div>
      )}
    </div>

    <hr />

    {/* MOBILE */}
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Mobile Number</h3>
        <button
          onClick={() => setEditMobile(!editMobile)}
          className="text-orange-600 text-sm font-medium"
        >
          {editMobile ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="max-w-md">
        <TextField
          label="Mobile Number"
          size="small"
          variant="outlined"
          sx={muiOrangeStyle}
          value={profile.mobile}
          disabled={!editMobile}
          onChange={(e) =>
            setProfile({ ...profile, mobile: e.target.value })
          }
          fullWidth
        />
      </div>

      {editMobile && (
        <div className="mt-5">
<Button
  variant="contained"
  onClick={() => saveProfile("mobile")}
  className="!bg-orange-600 hover:!bg-orange-700"
>
  Save
</Button>

        </div>
      )}
    </div>

    <hr />

    {/* ACCOUNT ACTIONS */}
    <div className="mt-8 text-sm space-y-3">
      <p className="text-blue-600 cursor-pointer hover:underline">
        Deactivate Account
      </p>
      <p className="text-red-500 cursor-pointer hover:underline">
        Delete Account
      </p>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default MyAccount;
