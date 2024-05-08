import React from "react";
import SettingIcon from "../../assets/icons/SettingIcon";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/contactSlice";

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
          onClick={() => document.getElementById("my_modal").showModal()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
