import React from "react";
import { useDispatch } from "react-redux";

import PlusIcon from "../../assets/icons/PlusIcon";
import { openModalNewContact } from "../../redux/modalContactSlice";
import Drawer from "../Drawer";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className='navbar bg-base-200'>
      <div className='navbar-start'>
        <Drawer />
      </div>
      <div className='navbar-center '>
        <h1 className='text-xl font-bold'>Hafi Contacts</h1>
      </div>
      <div className='navbar-end'>
        <button
          className='btn btn-ghost btn-circle'
          onClick={() => dispatch(openModalNewContact())}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
