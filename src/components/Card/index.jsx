import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import EditIcon from "../../assets/icons/EditIcon";
import { openModalEditContact } from "../../redux/modalContactSlice";

const Card = ({ id, firstName, lastName, age, avatar }) => {
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState(avatar);

  useEffect(() => {
    setAvatarUrl(avatar);

    return () => {};
  }, [avatar]);

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='card w-full bg-base-100 shadow-2xl'>
        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={() =>
            dispatch(
              openModalEditContact({ id, firstName, lastName, age, avatar }),
            )
          }>
          <EditIcon />
        </button>
        <figure className='px-10 pt-10'>
          <div className='avatar'>
            <div className='w-24 rounded-full'>
              <img
                alt='avatar'
                src={avatarUrl}
                onError={() =>
                  setAvatarUrl("https://avatar.iran.liara.run/public")
                }
              />
            </div>
          </div>
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>
            {firstName} {lastName}
          </h2>
          <p>{age} years old</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
