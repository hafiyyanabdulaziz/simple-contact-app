import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PlusIcon from "../../assets/icons/PlusIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import { increment } from "../../redux/contactSlice";
import { openModalNewContact } from "../../redux/modalContactSlice";

const Header = () => {
  const count = useSelector((state) => state.contact.value);
  const dispatch = useDispatch();

  return (
    <div className='navbar bg-base-200'>
      <div className='navbar-start'>
        <button
          className='btn btn-ghost btn-circle'
          onClick={() => dispatch(increment())}>
          <SettingIcon />
        </button>
        <p>{count}</p>
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
