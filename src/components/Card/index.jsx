import React, { useState } from "react";

const Card = ({ id, name, age, avatar }) => {
  const [avatarUrl, setAvatarUrl] = useState(avatar);

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='card w-full bg-base-100 shadow-2xl'>
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
          <h2 className='card-title'>{name}</h2>
          <p>{age} years old</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
