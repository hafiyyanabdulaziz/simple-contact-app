/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import UserCircleIcon from "../../assets/icons/UserCircleIcon";
import {
  addContacts,
  deleteContacts,
  editContacts,
  getAllContacts,
} from "../../redux/contactSlice";
import { convertFileToBase64 } from "../../utils";
import { setModalContactClose } from "../../redux/modalContactSlice";

// Component ini digunakan untuk add & edit
const Content = () => {
  const { data, isNew } = useSelector((state) => state.modalContact);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: !isNew ? data : null });

  const onSave = async (data) => {
    const photo = await convertFileToBase64(data.photo[0]);
    const newData = { ...data, photo, age: Number(data.age) };
    await dispatch(addContacts(newData)).unwrap();
    await dispatch(getAllContacts()).unwrap();
    dispatch(setModalContactClose());
  };

  const onUpdate = async (data) => {
    try {
      const isValidPhoto = data.photo[0] ? true : false;
      const photo = isValidPhoto
        ? await convertFileToBase64(data.photo[0])
        : data.avatar;
      const newData = { ...data, photo, age: Number(data.age) };
      delete newData.avatar;
      await dispatch(editContacts(newData)).unwrap();
      await dispatch(getAllContacts()).unwrap();
      dispatch(setModalContactClose());
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async () => {
    try {
      await dispatch(deleteContacts(data.id)).unwrap();
      await dispatch(getAllContacts()).unwrap();
      dispatch(setModalContactClose());
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    isNew ? onSave(data) : onUpdate(data);
  };

  const validationRule = {
    required: isNew ? "This field is required" : false,
    pattern: { value: /^\S*$/, message: "No space allowed" },
  };

  const showAsterik = isNew ? "*" : "";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-5 my-5'>
          <label className='input input-bordered flex items-center gap-2'>
            <UserCircleIcon />
            <input
              type='text'
              className='grow'
              placeholder={`First Name${showAsterik}`}
              {...register("firstName", validationRule)}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            <UserCircleIcon />
            <input
              type='text'
              className='grow'
              placeholder={`Last Name${showAsterik}`}
              {...register("lastName", validationRule)}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            <UserCircleIcon />
            <input
              type='number'
              className='grow'
              min={1}
              max={100}
              placeholder={`Age${showAsterik}`}
              {...register("age", validationRule)}
            />
            {errors.age && <span>{errors.age.message}</span>}
          </label>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>{`Upload Image${showAsterik}`}</span>
            </div>
            <input
              type='file'
              className='file-input file-input-bordered w-full max-w-xs'
              {...register("photo", validationRule)}
            />
            <div className='label'>
              {errors.photo && <span>{errors.photo.message}</span>}
            </div>
          </label>
          <button type='submit' className='btn btn-primary'>
            {isNew ? "Save" : "Edit"}
          </button>

          {!isNew ? (
            <button
              type='button'
              onClick={() => onDelete()}
              className='btn btn-error'>
              Delete
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Content;
