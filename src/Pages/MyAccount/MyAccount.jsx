import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";

const MyAccount = () => {
  return (
    <section className="py-3 lg:py-10 w-full">
      <div className="container flex flex-col  lg:flex-row gap-5">
        {/* LEFT SIDEBAR (ONLY ONCE) */}
        <div className="col1 w-full lg:w-[20%]">
          <AccountSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col2 w-full lg:w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 style={{ color: "#444444", fontWeight: 600 }} className="pb-3">
              My Profile
            </h2>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(0,0,0,0.12)",
              }}
            />

            <form className="mt-5">
              <div className="grid  grid-cols-1 md
              :grid-cols-2 gap-5">
                <div className="col">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>

                <div className="col"> 
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
                 <div className="col">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
              </div>



              <br />

              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                <Button className="btn-org btn-border btn-lg w-[100px]">
                  Cancel
                </Button>
              </div>
            </form>


          </div>
    <div className="card bg-white p-5 shadow-md rounded-md my-5">
                  <h2 style={{ color: "#444444", fontWeight: 600 }} className="pb-3">
            Change Password
            </h2>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(0,0,0,0.12)",
              }}
            />
            <form className="mt-5">
              <div className="grid  grid-cols-1 md
              :grid-cols-2 gap-5">
                <div className="col">
                  <TextField
                    label="Old Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>

                <div className="col"> 
                  <TextField
                    label="New Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
 
              </div>



              <br />

              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-full md:w-[50%] mx-auto">change Password</Button>

              </div>
            </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
