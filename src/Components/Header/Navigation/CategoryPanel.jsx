import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MdClose } from "react-icons/md";


import { CategoryCollapse } from "../../CategoryCollapse/CategoryCollapse";

const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.setIsOpenCatPanel(newOpen);
   props.propssetIsOpenCatPanel(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <div className="!p-3 text-[16px] font-[500]">
        <h3 className="relative flex items-center justify-between">
          Shop By Categories
          <MdClose
            className="cursor-pointer text-2xl"
            onClick={toggleDrawer(false)}
            aria-label="Close categories"
          />
        </h3>
      </div>

    <CategoryCollapse/>
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
