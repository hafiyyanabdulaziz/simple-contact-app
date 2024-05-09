import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "../../assets/icons/CloseIcon";
import { setModalContactClose } from "../../redux/modalContactSlice";
import Content from "./Content";

const Modal = () => {
  const { title } = useSelector((state) => state.modalContact);
  const dispatch = useDispatch();
  return (
    <>
      <dialog className={`modal modal-open`}>
        <div className='modal-box'>
          <button
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            onClick={() => dispatch(setModalContactClose())}>
            <CloseIcon />
          </button>
          <h3 className='font-bold text-lg'>{title}</h3>
          <Content />
        </div>
        <div className='modal-backdrop'>
          <button onClick={() => dispatch(setModalContactClose())}></button>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
