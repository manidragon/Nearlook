import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { MyContext } from "../../../App";
import { useContext } from "react";
import { CategoryCollapse } from "../../CategoryCollapse/CategoryCollapse";
import { Button } from "@mui/material";

const CategoryPanel = (props) => {
const context = useContext(MyContext);
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

{context.windowWidth < 992 && (
  <div className="p-3">
    <img
      src={localStorage.getItem("logo")}
      alt="logo"
      className="w-[150px]"
    />
  </div>
)}
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
{context?.windowWidth < 992 && 
<Link to="/login" className="!p-3 block" onClick={ () =>{props.setIsOpenCatPanel(false);
   props.propssetIsOpenCatPanel(false);}  }>
 
      <Button className="btn-org w-full">Login</Button>
    </Link>
}
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
