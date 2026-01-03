import React from "react";
import MyListitems from "./myListitems";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";

const MyList = () => {
  return (
    <section style={{ padding: "40px 0", width: "100%" }}>
      <div className="container" style={{ display: "flex", gap: "20px" }}>
        {/* LEFT SIDEBAR – ONLY ONCE */}
        <div style={{ width: "20%" }}>
          <AccountSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ width: "70%" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 6,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                padding: 15,
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ fontSize: 15, fontWeight: 600 }}>My List</h2>
              <p>
                There are <b style={{ color: "red" }}>2</b> products in your
                list
              </p>
            </div>

            <MyListitems />
            <MyListitems />
            <MyListitems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
