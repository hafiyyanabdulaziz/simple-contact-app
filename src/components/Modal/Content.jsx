import React from "react";
import UserCircleIcon from "../../assets/icons/UserCircleIcon";

const Content = () => {
  return (
    <div className='flex flex-col gap-5 my-5'>
      <label className='input input-bordered flex items-center gap-2'>
        <UserCircleIcon />
        <input type='text' className='grow' placeholder='First Name*' />
      </label>
      <label className='input input-bordered flex items-center gap-2'>
        <UserCircleIcon />
        <input type='text' className='grow' placeholder='Last Name*' />
      </label>
      <label className='input input-bordered flex items-center gap-2'>
        <UserCircleIcon />
        <input type='number' className='grow' placeholder='Age*' />
      </label>
      <label className='form-control w-full max-w-xs'>
        <div className='label'>
          <span className='label-text'>Upload Image*</span>
        </div>
        <input
          type='file'
          className='file-input file-input-bordered w-full max-w-xs'
        />
      </label>
      <div className='modal-action'>
        <form method='dialog'>
          {/* if there is a button, it will close the modal */}
          <button className='btn btn-primary mr-5'>Save</button>
          <button className='btn'>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Content;
