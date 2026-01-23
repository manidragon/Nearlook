import React from "react";
import MyListitems from "./myListitems";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";

const MyList = () => {
  return (
    <section className="py-4 lg:py-6 pb-20 w-full">
      <div className="container flex flex-col md:flex-row  gap-5" >
        {/* LEFT SIDEBAR – ONLY ONCE */}
        <div className="col1 w-full md:w-[20%] hidden lg:block">
          <AccountSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col2  w-full lg:w-[70%]">
          <div
            className=" bg-white shadow-md rounded-md"
          >
            <div
              className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]"
            >
              <h2 >My List</h2>
              <p className="mt-0 mb-0">
                There are <span className="font-bold text-orange-600">2</span> products in your
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
