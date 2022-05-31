import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../Contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        >
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const handleClick = () => {};
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        color="blue"
        icon={<Fi />}
        customFunc={() => handleClick("cart")}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          color="blue"
          icon={<AiOutlineMenu />}
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        />
      </div>
    </div>
  );
};

export default Navbar;
