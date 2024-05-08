import React from "react";
import UserCircleIcon from "../../assets/icons/UserCircleIcon";
import Content from "./Content";

const Modal = () => {
  return (
    <>
      <dialog id='my_modal' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Add Contacts</h3>
          <Content />
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
