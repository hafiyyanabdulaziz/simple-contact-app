import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import UserCircleIcon from "../../assets/icons/UserCircleIcon";
import { convertFileToBase64 } from "../../utils";

const Content = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const photo = await convertFileToBase64(data.photo[0]);
    const newData = { ...data, photo };
    console.log({ newData });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-5 my-5'>
          <label className='input input-bordered flex items-center gap-2'>
            <UserCircleIcon />
            <input
              type='text'
              className='grow'
              placeholder='First Name*'
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>This field is required</span>}
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            <UserCircleIcon />
            <input
              type='text'
              className='grow'
              placeholder='Last Name*'
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span>This field is required</span>}
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            <UserCircleIcon />
            <input
              type='number'
              className='grow'
              placeholder='Age*'
              {...register("age", { required: true })}
            />
            {errors.age && <span>This field is required</span>}
          </label>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Upload Image*</span>
            </div>
            <input
              type='file'
              className='file-input file-input-bordered w-full max-w-xs'
              {...register("photo", { required: true })}
            />
            <div className='label'>
              {errors.photo && <span>This field is required</span>}
            </div>
          </label>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Content;
